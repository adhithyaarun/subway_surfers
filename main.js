main();
// For music
setInterval(() => {
  if(!PAUSE && GAME) {
    audio.play();
  }
  else {
    audio.pause();
  }
}, 10);

setInterval(() => {
  if(GAME)
  {
    displayMessage('WOAH! LIGHTNING!');
  }
  flash = true;
    setTimeout(() => {
        flash = false;
        setTimeout(() => {
            flash = true;
            setTimeout(() => {
                flash = false;
                setTimeout(() => {
                    flash = true;
                    setTimeout(() => {
                        flash = false;
                        setTimeout(() => {
                            flash = true;
                            setTimeout(() => {
                                flash = false;
                                setTimeout(() => {
                                    flash = true;
                                    setTimeout(() => {
                                        flash = false;
                                    }, 500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
}, 30000);

function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  // Vertex shader program
  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec3 aVertexNormal;
    attribute vec2 aTextureCoord;

    uniform mat4 uNormalMatrix;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    uniform bool flash;

    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;

      highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
      
      // highp vec3 directionalLightColor = vec3(1.0, 1.0, 1.0);
      highp vec3 directionalLightColor = vec3(1.0, 0.95, 0.82);
      
      // highp vec3 directionalVector = vec3(0.85, 0.8, 0.75);
      highp vec3 directionalVector = vec3(0.25, 0.8, 0.75);
      
      if(flash) {
        directionalLightColor = vec3(1.7, 1.7, 1.7);
      }

      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

      highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
      vLighting = ambientLight + (directionalLightColor * directional);
    }
  `;

  // Fragment shader program
 const fsSource = `
    precision mediump float;  
    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    uniform sampler2D uSampler;
    uniform float now;
    uniform bool grayscale;

    vec4 convertToGrayscale(in vec4 color) {
      float mean = (color.r + color.g + color.b) / 3.0;
      return vec4(mean, mean, mean, 1.0);
    }

    vec4 convertToColor(in vec4 gray, in vec4 color) {
      return (gray * color);
    }

    void main(void) {
      highp vec4 texelColor = texture2D(uSampler, vTextureCoord);

      if(grayscale) 
      {
        gl_FragColor = convertToGrayscale(vec4(texelColor.rgb * vLighting, texelColor.a));
      }
      else
      {
        gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
      }

    }
  `;

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexNormal: gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      normalMatrix: gl.getUniformLocation(shaderProgram, 'uNormalMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
      grayscale: gl.getUniformLocation(shaderProgram, 'grayscale'),
      flash: gl.getUniformLocation(shaderProgram, 'flash'),
    },
  };

  createDynamic(gl);
  createStatic(gl);

  for(i in dynamicObjects)
  {
    dynamicBuffers.push(initBuffers(gl, dynamicObjects[i]));
  }
  
  for(i in staticObjects)
  {
    staticBuffers.push(initBuffers(gl, staticObjects[i]));
  }

  var then = 0;
  actual_distance = 10.0;

  function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    then = now;

    if (!GAME)
    {
      if(WIN)
      {
        displayMessage(`YOU WIN! YOUR SCORE: ${coins}`);
      }
      else
      {
        displayMessage(`YOU LOSE! YOUR SCORE: ${coins}`);
      }
      return 0;
    }

    if(!PAUSE && GAME)
    {
      if(actual_distance >= WIN_LENGTH)
      {
        GAME = false;
        WIN = true;
      }
      $('#score').html(String(coins));  
      // gl.clearColor(0.9, 0.7, 0.3, 0.7); // Clear to black, fully opaque
      gl.clearColor(0.76, 0.99, 1.0, 1.0);  // Clear to sky colour
      gl.clearDepth(1.0);                   // Clear everything
      gl.enable(gl.DEPTH_TEST);             // Enable depth testing
      gl.depthFunc(gl.LEQUAL);              // Near things obscure far things

      // Clear the canvas before we start drawing on it.
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


      // Perspective matrix
      const fieldOfView = 45 * Math.PI / 180;                         // Radians
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const zNear = 0.1;
      const zFar = 100.0;
      const projectionMatrix = mat4.create();

      mat4.perspective(projectionMatrix,
        fieldOfView,
        aspect,
        zNear,
        zFar);
      
      actual_distance += speed;
      for(i in dynamicObjects)
      {
        dynamicObjects[i].translation[2] += speed;
        distance += speed;
        // Speed up train
        if (dynamicObjects[i].type === 'TRAIN' || (dynamicObjects[i].type === 'COIN' && dynamicObjects[i].train))
        {
          dynamicObjects[i].translation[2] += (2 * speed);
        }
        // Accelerate
        if(Math.floor(distance) % 12000 == 0 && distance > 12000 && speed < 0.45)
        {
          speed += 0.01;
        }
        
        // Handle objects out of scope of view
        if (dynamicObjects[i].translation[2] > 32.0)
        {
          switch(dynamicObjects[i].type)
          {
            case "TRACK":
              dynamicObjects[i].translation[2] -= 16 * 9; 
              break;
            case 'GROUND':
              if(dynamicObjects[i].translation[2] > 96.0)
              {
                dynamicObjects[i].translation[2] -= 100 * 2; 
              }
              break;
            case 'WALL':
              dynamicObjects[i].translation[2] -= 25 * 5; 
              break;
            case 'TRAIN':
              dynamicObjects[i].translation[2] -= 300;
              coinsForTrain(gl, i);
              break;
              case 'BARRICADE':
              dynamicObjects[i].translation[2] -= 370;
              coinsForBarricade(gl, i); 
              break;
            case 'COIN':
              if (dynamicObjects[i].jetpack || dynamicObjects[i].train)
              {
                dynamicObjects.splice(i, 1);
                dynamicBuffers.splice(i, 1);
              }
              else
              {
                dynamicObjects[i].translation[2] = getRandomInt(actual_distance, 5400);
                dynamicObjects[i].translation[1] = -2.0;
                dynamicObjects[i].translation[0] = getRandomInt(-1, 1);
              }
              break;
            case 'BOOT':
            case 'JETPACK':
            case 'MAGNET':
              dynamicObjects[i].translation[0] = -3.0 * getRandomInt(-1, 1);
              dynamicObjects[i].translation[2] = -1.0 * getRandomInt(Math.abs(last_powerup) + 250, Math.abs(last_powerup) + 400);
              last_powerup = dynamicObjects[i].translation[2];
              break;
            case 'OIL':
            case 'BANANA':
              dynamicObjects[i].translation[0] = -3.0 * getRandomInt(-1, 1);
              dynamicObjects[i].translation[2] = -1.0 * getRandomInt(Math.abs(last_slip) + 100, Math.abs(last_slip) + 200);
              last_slip = dynamicObjects[i].translation[2];
              break;
          }
        }

        // Handle collisions
        if(dynamicObjects[i].type === 'COIN' || dynamicObjects[i].type === 'BOOT' || dynamicObjects[i].type === 'JETPACK' || dynamicObjects[i].type === 'MAGNET')
        {
          dynamicObjects[i].rotation[1] += 0.05;
          detectCollisionCollectible(i, gl);
        }
        else if(dynamicObjects[i].type === 'BARRICADE' || dynamicObjects[i].type === 'TRAIN')
        {
          detectDeadlyCollision(i, gl);
        }
        
        // Jetpack
        if (jetpack_flag && ground > (GROUND_LEVEL - pushDown))
        {
          if(dynamicObjects[i].type == 'COIN' && dynamicObjects[i].jetpack == true)
          {
            ;
          }
          else
          {
            dynamicObjects[i].translation[1] -= 0.050000000000000000;
            if(dynamicObjects[i].type === 'GROUND' && first_ground)
            {
              ground -= 0.050000000000000000;
              first_ground = false;
            }
            else if(dynamicObjects[i].type === 'GROUND' && !first_ground)
            {
              first_ground = true;
            }
          }
        }
        else if (!jetpack_flag && ground < GROUND_LEVEL)
        {
          dynamicObjects[i].translation[1] += 0.10000000000000000;
          if(dynamicObjects[i].type === 'GROUND' && first_ground)
          {
            ground += 0.10000000000000000;
            first_ground = false;
          }
          else if(dynamicObjects[i].type === 'GROUND' && !first_ground)
          {
            first_ground = true;
          }
        }
        
        // Magnet 
        if(magnet_flag)
        {
          if(dynamicObjects[i].type == 'COIN')
          {
            let x_distance = Math.abs(staticObjects[0].translation[0] - dynamicObjects[i].translation[0]);
            let z_distance = Math.abs(staticObjects[0].translation[2] - dynamicObjects[i].translation[2]);
            if(x_distance <= 6.5 && z_distance <= 4.0)
            {
              coins += 1;
              dynamicObjects.splice(i, 1);
              dynamicBuffers.splice(i, 1);
            }
          }
        }

        // Oil and Banana
        if(dynamicObjects[i].type === 'OIL' || dynamicObjects[i].type === 'BANANA')
        {
          if(dynamicObjects[i].translation[0] == staticObjects[0].translation[0] && Math.abs(dynamicObjects[i].translation[2] - staticObjects[0].translation[2]) < 15.0)
          {
            let dist = Math.sqrt(Math.pow(staticObjects[0].translation[0] - dynamicObjects[i].translation[0], 2) + Math.pow(staticObjects[0].translation[1] - dynamicObjects[i].translation[1], 2) + Math.pow(staticObjects[0].translation[2] - dynamicObjects[i].translation[2], 2));
            if(dist <= 0.65)
            {
              displayMessage('YOU WERE SLOWED DOWN BY OIL OR BANANA PEEL. RUN FASTER!');
              speed = MIN_SPEED;
              distance = 0.0;
              if(danger_flag)
              {
                speed = 0.0;
                jump = 0.0;
              }
              else
              {
                danger_flag = true;
                setTimeout(() => {
                  danger_flag = false;
                }, 10000);
              }
              dynamicObjects[i].translation[0] = -3.0 * getRandomInt(-1, 1);
              dynamicObjects[i].translation[2] = -1.0 * getRandomInt(Math.abs(last_slip) + 100, Math.abs(last_slip) + 200);
              last_slip = dynamicObjects[i].translation[2];
            }
          }
          else
          {
            continue;
          }
        }

        drawScene(gl, programInfo, dynamicBuffers[i], deltaTime, dynamicObjects[i], projectionMatrix);
      }
      
      // Movement: Right and Left
      if(speed > 0)
      {  
        // Going left
        if (direction[0])
        {
          switch (staticObjects[0].translation[0])
          {
            case M_TRACK:
              staticObjects[0].translation[0] = L_TRACK;
              if(checkDeadlyCollision(staticObjects[0].translation))
              {
                staticObjects[0].translation[0] = M_TRACK;
                speed = MIN_SPEED;
                distance = 0.0;
                if(danger_flag)
                {
                  speed = 0.0;
                  jump = 0.0;
                }
                else
                {
                  danger_flag = true;
                  setTimeout(() => {
                    danger_flag = false;
                  }, 10000);
                }
              }
              direction[0] = false;
              break;
            case R_TRACK:
              staticObjects[0].translation[0] = M_TRACK;
              if(checkDeadlyCollision(staticObjects[0].translation))
              {
                staticObjects[0].translation[0] = R_TRACK;
                speed = MIN_SPEED;
                distance = 0.0;
                if(danger_flag)
                {
                  speed = 0.0;
                  jump = 0.0;
                }
                else
                {
                  danger_flag = true;
                  setTimeout(() => {
                    danger_flag = false;
                  }, 10000);
                }
              }
              direction[0] = false;
              break;
            default:
              direction[0] = false;
              break;
          }
        }
        // Going right
        else if (direction[3])
        {
          switch (staticObjects[0].translation[0]) 
          {
            case M_TRACK:
              staticObjects[0].translation[0] = R_TRACK;
              if(checkDeadlyCollision(staticObjects[0].translation))
              {
                staticObjects[0].translation[0] = M_TRACK;
                speed = MIN_SPEED;
                distance = 0.0;
                if(danger_flag)
                {
                  speed = 0.0;
                  jump = 0.0;
                }
                else
                {
                  danger_flag = true;
                  setTimeout(() => {
                    danger_flag = false;
                  }, 10000);
                }
              }
              direction[3] = false;
              break;
            case L_TRACK:
              staticObjects[0].translation[0] = M_TRACK;
              if(checkDeadlyCollision(staticObjects[0].translation))
              {
                staticObjects[0].translation[0] = L_TRACK;
                speed = MIN_SPEED;
                distance = 0.0;
                if (danger_flag) {
                  speed = 0.0;
                  jump = 0.0;
                }
                else
                {
                  danger_flag = true;
                  setTimeout(() => {
                    danger_flag = false;
                  }, 10000);
                }
              }
              direction[3] = false;
              break;
            default:
              direction[3] = false;
              break;
          }
        }
      }
        
      // Movement: Jumping and Ducking
      if(direction[1] && player_position == ON_GROUND)
      {
        direction[1] = false;
        gravity = false;
        base = staticObjects[0].translation[1];
      }
      else if(direction[2])
      {
        direction[2] = false;
        gravity = true;
      }

      if(gravity)
      {
        checkTrainBelowMe(staticObjects[0].translation);
        if(staticObjects[0].translation[1] > base)
        {
          staticObjects[0].translation[1] -= 0.1;
          checkTrainBelowMe(staticObjects[0].translation);
        }
        else
        {
          player_position = ON_GROUND;
        }
      }
      else
      {
        if(Math.abs(staticObjects[0].translation[1] - base) < (1.5 * jump))
        {
          staticObjects[0].translation[1] += 0.1;
          player_position = IN_AIR;
        }
        else
        {
          gravity = true;
        }
      }

      for(i in staticObjects)
      {
        if(speed == 0 && staticObjects[i].type == 'POLICE')
        {
          if(staticObjects[1].translation[2] >= -7.9)
          {
            staticObjects[1].translation[2] -= 0.5;
            displayMessage('OH NO! YOU GOT CAUGHT');
          }
          else
          {
            GAME = false;
          }
        }
        else if(!danger_flag && staticObjects[i].type == 'POLICE' && distance > 550.0 && staticObjects[i].translation[2] < 3.0)
        {
          staticObjects[i].translation[2] += 0.05;
        }
        else if(danger_flag && staticObjects[i].type == 'POLICE' && staticObjects[i].translation[2] > -6.0)
        {
          staticObjects[i].translation[2] -= 0.2;
        }

        staticObjects[1].translation[0] = staticObjects[0].translation[0];
        
        drawScene(gl, programInfo, staticBuffers[i], deltaTime, staticObjects[i], projectionMatrix);
      }
    }

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
