main();
setInterval(() => {
  if(!PAUSE && GAME) {
    audio.play();
  }
  else {
    audio.pause();
  }
}, 10);

// Start here
function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  // If we don't have a GL context, give up now
  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  // Vertex shader program
  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;

  // Fragment shader program
 const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;

  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  // Collect all the info needed to use the shader program.
  // Look up which attributes our shader program is using
  // for aVertexPosition, aVevrtexColor and also
  // look up uniform locations.
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
    },
  };

  // Here's where we call the routine that builds all the
  // objects we'll be drawing.
  var dynamicObjects = [];
  var staticObjects = [];

  dynamicObjects.push(createCube  ( 2.0,   0.0,   -6.0,   10.0,   0.7, gl));    // Floating Cube
  dynamicObjects.push(createCube  (-2.0,   0.0,   -6.0,  -10.0,   0.5, gl));    // Floating Cube
  dynamicObjects.push(createCube  ( 2.0,   0.0,  -16.0,   10.0,   0.7, gl));    // Floating Cube
  dynamicObjects.push(createCube  (-2.0,   0.0,  -16.0,  -10.0,   0.5, gl));    // Floating Cube
  dynamicObjects.push(createCube  ( 2.0,   0.0,  -26.0,   10.0,   0.7, gl));    // Floating Cube
  dynamicObjects.push(createCube  (-2.0,   0.0,  -26.0,  -10.0,   0.5, gl));    // Floating Cube
  dynamicObjects.push(createBar   (M_TRACK,-2.5,  -20.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (L_TRACK,-2.5,  -40.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (M_TRACK,-2.5,  -60.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (R_TRACK,-2.5,  -80.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (M_TRACK,-2.5, -120.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (L_TRACK,-2.5, -140.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (M_TRACK,-2.5, -160.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (R_TRACK,-2.5, -180.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (M_TRACK,-2.5, -220.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (L_TRACK,-2.5, -240.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (M_TRACK,-2.5, -260.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (R_TRACK,-2.5, -280.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (M_TRACK,-2.5, -320.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (L_TRACK,-2.5, -340.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (M_TRACK,-2.5, -360.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createBar   (R_TRACK,-2.5, -380.0,    0.0,   1.0, gl));   // Barricade
  dynamicObjects.push(createTrain (R_TRACK,-2.0, -160.0,    0.0,   1.0, gl));   // Train
  dynamicObjects.push(createTrain (L_TRACK,-2.0, -210.0,    0.0,   1.0, gl));   // Train
  dynamicObjects.push(createTrain (M_TRACK,-2.0, -260.0,    0.0,   1.0, gl));   // Train
  dynamicObjects.push(createTrain (R_TRACK,-2.0, -310.0,    0.0,   1.0, gl));   // Train
  dynamicObjects.push(createTrain (L_TRACK,-2.0, -370.0,    0.0,   1.0, gl));   // Train
  
  // Last 4 objects are static
  staticObjects.push(createPlayer( 0.0,  -2.2,   -10.0,    0.0,   1.0, gl));   // Player
  staticObjects.push(createGround( 0.0,  -4.0,   -5.0,    0.0,   1.0, gl));    // Ground
  staticObjects.push(createWall  (-12.0,  -3.0,   -5.0,    0.0,   1.0, gl));    // Left Wall 1
  staticObjects.push(createWall  (-12.0,  -3.0,  -30.0,    0.0,   1.0, gl));    // Left Wall 2
  staticObjects.push(createWall  (-12.0,  -3.0,  -55.0,    0.0,   1.0, gl));    // Left Wall 2
  staticObjects.push(createWall  (-12.0,  -3.0,  -80.0,    0.0,   1.0, gl));    // Left Wall 2
  staticObjects.push(createWall  ( 12.0,  -3.0,   -5.0,    0.0,   1.0, gl));    // Right Wall
  staticObjects.push(createWall  ( 12.0,  -3.0,  -30.0,    0.0,   1.0, gl));    // Left Wall 2
  staticObjects.push(createWall  ( 12.0,  -3.0,  -55.0,    0.0,   1.0, gl));    // Left Wall 2
  staticObjects.push(createWall  ( 12.0,  -3.0,  -80.0,    0.0,   1.0, gl));    // Left Wall 2
  staticObjects.push(createTrack ( L_TRACK,  -3.0,   -5.0,    0.0,   1.0, gl));    // Left Track
  staticObjects.push(createTrack ( M_TRACK,  -3.0,   -5.0,    0.0,   1.0, gl));    // Middle Track
  staticObjects.push(createTrack ( R_TRACK,  -3.0,   -5.0,    0.0,   1.0, gl));    // Right Track

  var dynamicBuffers = [];
  var staticBuffers = [];

  for(i in dynamicObjects)
  {
    dynamicBuffers.push(initBuffers(gl, dynamicObjects[i]));
  }
  
  for(i in staticObjects)
  {
    staticBuffers.push(initBuffers(gl, staticObjects[i]));
  }

  var then = 0;

  // Draw the scene repeatedly
  function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    then = now;

    if (!GAME)
    {
      return 0;
    }

    if(!PAUSE && GAME)
    {  
      gl.clearColor(0.9, 0.7, 0.3, 0.7); // Clear to black, fully opaque
      gl.clearDepth(1.0); // Clear everything
      gl.enable(gl.DEPTH_TEST); // Enable depth testing
      gl.depthFunc(gl.LEQUAL); // Near things obscure far things

      // Clear the canvas before we start drawing on it.
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


      // Create a perspective matrix, a special matrix that is
      // used to simulate the distortion of perspective in a camera.
      // Our field of view is 45 degrees, with a width/height
      // ratio that matches the display size of the canvas
      // and we only want to see objects between 0.1 units
      // and 100 units away from the camera.
      const fieldOfView = 45 * Math.PI / 180; // in radians
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const zNear = 0.1;
      const zFar = 100.0;
      const projectionMatrix = mat4.create();

      // note: glmatrix.js always has the first argument
      // as the destination to receive the result.
      mat4.perspective(projectionMatrix,
        fieldOfView,
        aspect,
        zNear,
        zFar);
      
      for(i in dynamicObjects)
      {
        dynamicObjects[i].translation[2] += speed;
        distance += speed;

        if (dynamicObjects[i].type === 'TRAIN')
        {
          dynamicObjects[i].translation[2] += (2 * speed);
        }
        
        if(distance % 120 == 0)
        {
          speed += 0.02;
        }
        // Decide distance of each level
        
        if(dynamicObjects[i].translation[2] > 30.0)
        {
          dynamicObjects.splice(i, 1);
          dynamicBuffers.splice(i, 1);
          i--;
          continue;
        }

        drawScene(gl, programInfo, dynamicBuffers[i], deltaTime, dynamicObjects[i], projectionMatrix);
      }
      
      if (direction[0])
      {
        switch (staticObjects[0].translation[0])
        {
          case M_TRACK:
            staticObjects[0].translation[0] = L_TRACK;
            direction[0] = false;
            break;
          case R_TRACK:
            staticObjects[0].translation[0] = M_TRACK;
            direction[0] = false;
            break;
          default:
            direction[0] = false;
            break;
        }
      }
      else if (direction[3])
      {
        switch (staticObjects[0].translation[0]) 
        {
          case M_TRACK:
            staticObjects[0].translation[0] = R_TRACK;
            direction[3] = false;
            break;
          case L_TRACK:
            staticObjects[0].translation[0] = M_TRACK;
            direction[3] = false;
            break;
          default:
            direction[3] = false;
            break;
        }
      }
        
      // Jumping
      if(direction[1] && player_position == ON_GROUND)
      {
        direction[1] = false;
        gravity = false;
        base = staticObjects[0].translation[1];
      }
      // Ducking
      else if(direction[2])
      {
        direction[2] = false;
        gravity = true;
      }

      if(gravity)
      {
        if(staticObjects[0].translation[1] > PLAYER_GROUND)
        {
          staticObjects[0].translation[1] -= 0.1;
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
        drawScene(gl, programInfo, staticBuffers[i], deltaTime, staticObjects[i], projectionMatrix);
      }
    }

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
