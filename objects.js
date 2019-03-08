function createCube(x, y, z, r, s, gl) {
    let cube = {
        positions: [
            // Front face
            -1.0 * s, -1.0 * s, 1.0 * s,
             1.0 * s, -1.0 * s, 1.0 * s,
             1.0 * s,  1.0 * s, 1.0 * s,
            -1.0 * s,  1.0 * s, 1.0 * s,

            // Back face
            -1.0 * s, -1.0 * s, -1.0 * s,
             1.0 * s, -1.0 * s, -1.0 * s,
             1.0 * s,  1.0 * s, -1.0 * s,
            -1.0 * s,  1.0 * s, -1.0 * s,

            // Right face
             1.0 * s, -1.0 * s,  1.0 * s,
             1.0 * s, -1.0 * s, -1.0 * s,
             1.0 * s,  1.0 * s, -1.0 * s,
             1.0 * s,  1.0 * s,  1.0 * s,

            // Left face
            -1.0 * s, -1.0 * s,  1.0 * s,
            -1.0 * s, -1.0 * s, -1.0 * s,
            -1.0 * s,  1.0 * s, -1.0 * s,
            -1.0 * s,  1.0 * s,  1.0 * s,

            // Top face
            -1.0 * s,  1.0 * s,  1.0 * s,
             1.0 * s,  1.0 * s,  1.0 * s,
             1.0 * s,  1.0 * s, -1.0 * s,
            -1.0 * s,  1.0 * s, -1.0 * s,

            // Bottom face
            -1.0 * s, -1.0 * s,  1.0 * s,
             1.0 * s, -1.0 * s,  1.0 * s,
             1.0 * s, -1.0 * s, -1.0 * s,
            -1.0 * s, -1.0 * s, -1.0 * s,
        ],
        indices: [
             0,  1,  2,      0,  2,  3, // front
             4,  5,  6,      4,  6,  7, // back
             8, 11, 10,      8,  9, 10, // right
            12, 15, 14,     12, 13, 14, // left
            17, 16, 18,     16, 18, 19, // top
            20, 21, 23,     21, 23, 22, // bottom
        ],
        translation: [x, y, z],
        rotation: r,
        texture: loadTexture(gl, TEXTURE_PLAIN),
        textureCoordinates: [
            // Front
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            
            // Back
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            
            // Right
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            
            // Left
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            
            // Top
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            
            // Bottom
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ],
        vertexNormals: [
            // Front
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,

            // Back
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,

            // Right
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,

            // Left
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,

            // Top
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,

            // Bottom
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
        ],
        type: 'CUBE',
    };

    return cube;
}

function createGround(x, y, z, r, s, gl)
{
    var ground = {
        positions: [
            // Front face
            -15.0 * s, -0.2 * s, 100.0 * s,
             15.0 * s, -0.2 * s, 100.0 * s,
             15.0 * s,  0.2 * s, 100.0 * s,
            -15.0 * s,  0.2 * s, 100.0 * s,

            // Back face
            -15.0 * s, -0.2 * s, -100.0 * s,
             15.0 * s, -0.2 * s, -100.0 * s,
             15.0 * s,  0.2 * s, -100.0 * s,
            -15.0 * s,  0.2 * s, -100.0 * s,

            // Right face
            15.0 * s, -0.2 * s,  100.0 * s,
            15.0 * s, -0.2 * s, -100.0 * s,
            15.0 * s,  0.2 * s, -100.0 * s,
            15.0 * s,  0.2 * s,  100.0 * s,

            // Left face
            -15.0 * s, -0.2 * s,  100.0 * s,
            -15.0 * s, -0.2 * s, -100.0 * s,
            -15.0 * s,  0.2 * s, -100.0 * s,
            -15.0 * s,  0.2 * s,  100.0 * s,

            // Top face
            -15.0 * s, 0.2 * s,  100.0 * s,
             15.0 * s, 0.2 * s,  100.0 * s,
             15.0 * s, 0.2 * s, -100.0 * s,
            -15.0 * s, 0.2 * s, -100.0 * s,

            // Bottom face
            -15.0 * s, -0.2 * s,  100.0 * s,
             15.0 * s, -0.2 * s,  100.0 * s,
             15.0 * s, -0.2 * s, -100.0 * s,
            -15.0 * s, -0.2 * s, -100.0 * s,
        ],
        indices: [
             0,  1,  2,      0,  2,  3, // front
             4,  5,  6,      4,  6,  7, // back
             8, 11, 10,      8,  9, 10, // right
            12, 15, 14,     12, 13, 14, // left
            17, 16, 18,     16, 18, 19, // top
            20, 21, 23,     21, 23, 22, // bottom
        ],
        translation: [x, y, z],
        rotation: r,
        texture: loadTexture(gl, TEXTURE_GRASS),
        textureCoordinates: [
            // Front
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Right
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Left
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Top
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Bottom
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ],
        vertexNormals: [
            // Front
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,

            // Back
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,

            // Right
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,

            // Left
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,

            // Top
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,

            // Bottom
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
        ],
        type: 'GROUND',
    };

    return ground;
}

function createTrack(x, y, z, r, s, gl)
{
    var track = {
        positions: [
            // Front face
            -1.6 * s, -0.2 * s, 8.0 * s,
             1.6 * s, -0.2 * s, 8.0 * s,
             1.6 * s,  0.2 * s, 8.0 * s,
            -1.6 * s,  0.2 * s, 8.0 * s,

            // Back face
            -1.6 * s, -0.2 * s, -8.0 * s,
             1.6 * s, -0.2 * s, -8.0 * s,
             1.6 * s,  0.2 * s, -8.0 * s,
            -1.6 * s,  0.2 * s, -8.0 * s,

            // Right face
             1.6 * s, -0.2 * s,  8.0 * s,
             1.6 * s, -0.2 * s, -8.0 * s,
             1.6 * s,  0.2 * s, -8.0 * s,
             1.6 * s,  0.2 * s,  8.0 * s,

            // Left face
            -1.6 * s, -0.2 * s,  8.0 * s,
            -1.6 * s, -0.2 * s, -8.0 * s,
            -1.6 * s,  0.2 * s, -8.0 * s,
            -1.6 * s,  0.2 * s,  8.0 * s,

            // Top face
            -1.6 * s,  0.2 * s,  8.0 * s,
             1.6 * s,  0.2 * s,  8.0 * s,
             1.6 * s,  0.2 * s, -8.0 * s,
            -1.6 * s,  0.2 * s, -8.0 * s,

            // Bottom face
            -1.6 * s, -0.2 * s,  8.0 * s,
             1.6 * s, -0.2 * s,  8.0 * s,
             1.6 * s, -0.2 * s, -8.0 * s,
            -1.6 * s, -0.2 * s, -8.0 * s,
        ],
        indices: [
             0,  1,  2,      0,  2,  3, // front
             4,  5,  6,      4,  6,  7, // back
             8, 11, 10,      8,  9, 10, // right
            12, 15, 14,     12, 13, 14, // left
            17, 16, 18,     16, 18, 19, // top
            20, 21, 23,     21, 23, 22, // bottom
        ],
        translation: [x, y, z],
        rotation: r,
        texture: loadTexture(gl, TEXTURE_TRACK),
        textureCoordinates: [
            // Front
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Right
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Left
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Top
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Bottom
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ],
        vertexNormals: [
            // Front
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,

            // Back
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,

            // Right
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,

            // Left
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,

            // Top
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,

            // Bottom
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
        ],
        type: 'TRACK',
    };

    return track;
}

function createWall(x, y, z, r, s, gl) {
    var wall = {
        positions: [
            // Front face
            -5.5 * s, -6.0 * s,  10.0 * s,
             5.5 * s, -6.0 * s,  10.0 * s,
             5.5 * s,  6.0 * s,  10.0 * s,
            -5.5 * s,  6.0 * s,  10.0 * s,

            // Back face
            -5.5 * s, -6.0 * s, -10.0 * s,
             5.5 * s, -6.0 * s, -10.0 * s,
             5.5 * s,  6.0 * s, -10.0 * s,
            -5.5 * s,  6.0 * s, -10.0 * s,

            // Right face
             5.5 * s, -6.0 * s,  10.0 * s,
             5.5 * s, -6.0 * s, -10.0 * s,
             5.5 * s,  6.0 * s, -10.0 * s,
             5.5 * s,  6.0 * s,  10.0 * s,

            // Left face
            -5.5 * s, -6.0 * s,  10.0 * s,
            -5.5 * s, -6.0 * s, -10.0 * s,
            -5.5 * s,  6.0 * s, -10.0 * s,
            -5.5 * s,  6.0 * s,  10.0 * s,

            // Top face
            -5.5 * s,  6.0 * s,  10.0 * s,
             5.5 * s,  6.0 * s,  10.0 * s,
             5.5 * s,  6.0 * s, -10.0 * s,
            -5.5 * s,  6.0 * s, -10.0 * s,

            // Bottom face
            -5.5 * s, -6.0 * s,  10.0 * s,
             5.5 * s, -6.0 * s,  10.0 * s,
             5.5 * s, -6.0 * s, -10.0 * s,
            -5.5 * s, -6.0 * s, -10.0 * s,
        ],
        indices: [
             0,  1,  2,      0,  2,  3, // front
             4,  5,  6,      4,  6,  7, // back
             8, 11, 10,      8,  9, 10, // right
            12, 15, 14,     12, 13, 14, // left
            17, 16, 18,     16, 18, 19, // top
            20, 21, 23,     21, 23, 22, // bottom
        ],
        translation: [x, y, z],
        rotation: r,
        texture: loadTexture(gl, TEXTURE_WALL),
        textureCoordinates: [
            // Front
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Right
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Left
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Top
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Bottom
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ],
        vertexNormals: [
            // Front
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,

            // Back
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,

            // Right
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,

            // Left
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,

            // Top
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,

            // Bottom
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
        ],
        type: 'WALL',
    };

    return wall;
}

function createPlayer(x, y, z, r, s, gl) {
    let player = {
        positions: [
            // Front face
            -0.4 * s, -0.7 * s, 0.2 * s,
             0.4 * s, -0.7 * s, 0.2 * s,
             0.4 * s,  0.7 * s, 0.2 * s,
            -0.4 * s,  0.7 * s, 0.2 * s,

            // Back face
            -0.4 * s, -0.7 * s, -0.2 * s,
             0.4 * s, -0.7 * s, -0.2 * s,
             0.4 * s,  0.7 * s, -0.2 * s,
            -0.4 * s,  0.7 * s, -0.2 * s,

            // Right face
             0.4 * s, -0.7 * s,  0.2 * s,
             0.4 * s, -0.7 * s, -0.2 * s,
             0.4 * s,  0.7 * s, -0.2 * s,
             0.4 * s,  0.7 * s,  0.2 * s,

            // Left face
            -0.4 * s, -0.7 * s,  0.2 * s,
            -0.4 * s, -0.7 * s, -0.2 * s,
            -0.4 * s,  0.7 * s, -0.2 * s,
            -0.4 * s,  0.7 * s,  0.2 * s,

            // Top face
            -0.4 * s,  0.7 * s,  0.2 * s,
             0.4 * s,  0.7 * s,  0.2 * s,
             0.4 * s,  0.7 * s, -0.2 * s,
            -0.4 * s,  0.7 * s, -0.2 * s,

            // Bottom face
            -0.4 * s, -0.7 * s,  0.2 * s,
             0.4 * s, -0.7 * s,  0.2 * s,
             0.4 * s, -0.7 * s, -0.2 * s,
            -0.4 * s, -0.7 * s, -0.2 * s,
        ],
        indices: [
             0,  1,  2,      0,  2,  3, // front
             4,  5,  6,      4,  6,  7, // back
             8, 11, 10,      8,  9, 10, // right
            12, 15, 14,     12, 13, 14, // left
            17, 16, 18,     16, 18, 19, // top
            20, 21, 23,     21, 23, 22, // bottom
        ],
        translation: [x, y, z],
        rotation: r,
        texture: loadTexture(gl, TEXTURE_PLAIN),
        textureCoordinates: [
            // Front
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Right
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Left
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Top
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Bottom
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ],
        vertexNormals: [
            // Front
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,

            // Back
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,

            // Right
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,

            // Left
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,

            // Top
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,

            // Bottom
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
        ],
        type: 'PLAYER',
    };

    return player;
}

function createBar(x, y, z, r, s, gl) {
    let barricade = {
        positions: [
            // Front face
            -0.6 * s, -0.5 * s, 0.1 * s,
             0.6 * s, -0.5 * s, 0.1 * s,
             0.6 * s,  0.5 * s, 0.1 * s,
            -0.6 * s,  0.5 * s, 0.1 * s,

            // Back face
            -0.6 * s, -0.5 * s, -0.1 * s,
             0.6 * s, -0.5 * s, -0.1 * s,
             0.6 * s,  0.5 * s, -0.1 * s,
            -0.6 * s,  0.5 * s, -0.1 * s,

            // Right face
             0.6 * s, -0.5 * s,  0.1 * s,
             0.6 * s, -0.5 * s, -0.1 * s,
             0.6 * s,  0.5 * s, -0.1 * s,
             0.6 * s,  0.5 * s,  0.1 * s,

            // Left face
            -0.6 * s, -0.5 * s,  0.1 * s,
            -0.6 * s, -0.5 * s, -0.1 * s,
            -0.6 * s,  0.5 * s, -0.1 * s,
            -0.6 * s,  0.5 * s,  0.1 * s,

            // Top face
            -0.6 * s,  0.5 * s,  0.1 * s,
             0.6 * s,  0.5 * s,  0.1 * s,
             0.6 * s,  0.5 * s, -0.1 * s,
            -0.6 * s,  0.5 * s, -0.1 * s,

            // Bottom face
            -0.6 * s, -0.5 * s,  0.1 * s,
             0.6 * s, -0.5 * s,  0.1 * s,
             0.6 * s, -0.5 * s, -0.1 * s,
            -0.6 * s, -0.5 * s, -0.1 * s,
        ],
        indices: [
             0,  1,  2,      0,  2,  3, // front
             4,  5,  6,      4,  6,  7, // back
             8, 11, 10,      8,  9, 10, // right
            12, 15, 14,     12, 13, 14, // left
            17, 16, 18,     16, 18, 19, // top
            20, 21, 23,     21, 23, 22, // bottom
        ],
        translation: [x, y, z],
        rotation: r,
        texture: loadTexture(gl, TEXTURE_BARRICADE),
        textureCoordinates: [
            // Front
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Right
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Left
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Top
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Bottom
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ],
        vertexNormals: [
            // Front
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,

            // Back
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,

            // Right
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,

            // Left
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,

            // Top
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,

            // Bottom
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
        ],
        type: 'BARRICADE',
    };

    return barricade;
}

function createTrain(x, y, z, r, s, gl) {
    let color = [Math.random(), Math.random(), Math.random(), 1.0];
    let train = {
        positions: [
            // Front face
            -1.2 * s, -1.0 * s, 15.0 * s,
             1.2 * s, -1.0 * s, 15.0 * s,
             1.2 * s,  1.0 * s, 15.0 * s,
            -1.2 * s,  1.0 * s, 15.0 * s,

            // Back face
            -1.2 * s, -1.0 * s, -15.0 * s,
             1.2 * s, -1.0 * s, -15.0 * s,
             1.2 * s,  1.0 * s, -15.0 * s,
            -1.2 * s,  1.0 * s, -15.0 * s,

            // Right face
             1.2 * s, -1.0 * s,  15.0 * s,
             1.2 * s, -1.0 * s, -15.0 * s,
             1.2 * s,  1.0 * s, -15.0 * s,
             1.2 * s,  1.0 * s,  15.0 * s,

            // Left face
            -1.2 * s, -1.0 * s,  15.0 * s,
            -1.2 * s, -1.0 * s, -15.0 * s,
            -1.2 * s,  1.0 * s, -15.0 * s,
            -1.2 * s,  1.0 * s,  15.0 * s,

            // Top face
            -1.2 * s,  1.0 * s,  15.0 * s,
             1.2 * s,  1.0 * s,  15.0 * s,
             1.2 * s,  1.0 * s, -15.0 * s,
            -1.2 * s,  1.0 * s, -15.0 * s,

            // Bottom face
            -1.2 * s, -1.0 * s,  15.0 * s,
             1.2 * s, -1.0 * s,  15.0 * s,
             1.2 * s, -1.0 * s, -15.0 * s,
            -1.2 * s, -1.0 * s, -15.0 * s,
        ],
        indices: [
             0,  1,  2,      0,  2,  3, // front
             4,  5,  6,      4,  6,  7, // back
             8, 11, 10,      8,  9, 10, // right
            12, 15, 14,     12, 13, 14, // left
            17, 16, 18,     16, 18, 19, // top
            20, 21, 23,     21, 23, 22, // bottom
        ],
        translation: [x, y, z],
        rotation: r,
        texture: loadTexture(gl, TEXTURE_PLAIN),
        textureCoordinates: [
            // Front
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Right
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Left
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Top
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Bottom
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ],
        vertexNormals: [
            // Front
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,
            0.0,  0.0,  1.0,

            // Back
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,
            0.0,  0.0, -1.0,

            // Right
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,
            1.0,  0.0,  0.0,

            // Left
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,

            // Top
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,
            0.0,  1.0,  0.0,

            // Bottom
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
            0.0, -1.0,  0.0,
        ],
        type: 'TRAIN',
    };

    return train;
}

function createDynamic(gl) {
    var dynamicObjects = [];

    // Cubes
    dynamicObjects.push(createCube  ( 2.0,   0.0,   -6.0,   10.0,   0.7, gl));
    dynamicObjects.push(createCube  (-2.0,   0.0,   -6.0,  -10.0,   0.5, gl));
    dynamicObjects.push(createCube  ( 2.0,   0.0,  -16.0,   10.0,   0.7, gl));
    dynamicObjects.push(createCube  (-2.0,   0.0,  -16.0,  -10.0,   0.5, gl));
    dynamicObjects.push(createCube  ( 2.0,   0.0,  -26.0,   10.0,   0.7, gl));
    dynamicObjects.push(createCube  (-2.0,   0.0,  -26.0,  -10.0,   0.5, gl));

    // Barricade
    dynamicObjects.push(createBar   (M_TRACK,-2.5,  -20.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (L_TRACK,-2.5,  -40.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (M_TRACK,-2.5,  -60.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (R_TRACK,-2.5,  -80.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (M_TRACK,-2.5, -120.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (L_TRACK,-2.5, -140.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (M_TRACK,-2.5, -160.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (R_TRACK,-2.5, -180.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (M_TRACK,-2.5, -220.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (L_TRACK,-2.5, -240.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (M_TRACK,-2.5, -260.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (R_TRACK,-2.5, -280.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (M_TRACK,-2.5, -320.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (L_TRACK,-2.5, -340.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (M_TRACK,-2.5, -360.0,    0.0,   1.0, gl));
    dynamicObjects.push(createBar   (R_TRACK,-2.5, -380.0,    0.0,   1.0, gl));

    // Train
    dynamicObjects.push(createTrain (R_TRACK,-2.0, -160.0,    0.0,   1.0, gl));
    dynamicObjects.push(createTrain (L_TRACK,-2.0, -210.0,    0.0,   1.0, gl));
    dynamicObjects.push(createTrain (M_TRACK,-2.0, -260.0,    0.0,   1.0, gl));
    dynamicObjects.push(createTrain (R_TRACK,-2.0, -310.0,    0.0,   1.0, gl));
    dynamicObjects.push(createTrain (L_TRACK,-2.0, -370.0,    0.0,   1.0, gl));

    // Track
    dynamicObjects.push(createTrack ( L_TRACK,  -3.0,   -5.0,    0.0,   1.0, gl));     // Set 1
    dynamicObjects.push(createTrack ( M_TRACK,  -3.0,   -5.0,    0.0,   1.0, gl));     // Set 1
    dynamicObjects.push(createTrack ( R_TRACK,  -3.0,   -5.0,    0.0,   1.0, gl));     // Set 1
    dynamicObjects.push(createTrack ( L_TRACK,  -3.0,   -21.0,    0.0,   1.0, gl));    // Set 2
    dynamicObjects.push(createTrack ( M_TRACK,  -3.0,   -21.0,    0.0,   1.0, gl));    // Set 2
    dynamicObjects.push(createTrack ( R_TRACK,  -3.0,   -21.0,    0.0,   1.0, gl));    // Set 2
    dynamicObjects.push(createTrack ( L_TRACK,  -3.0,   -37.0,    0.0,   1.0, gl));    // Set 3
    dynamicObjects.push(createTrack ( M_TRACK,  -3.0,   -37.0,    0.0,   1.0, gl));    // Set 3
    dynamicObjects.push(createTrack ( R_TRACK,  -3.0,   -37.0,    0.0,   1.0, gl));    // Set 3
    dynamicObjects.push(createTrack ( L_TRACK,  -3.0,   -53.0,    0.0,   1.0, gl));    // Set 4
    dynamicObjects.push(createTrack ( M_TRACK,  -3.0,   -53.0,    0.0,   1.0, gl));    // Set 4
    dynamicObjects.push(createTrack ( R_TRACK,  -3.0,   -53.0,    0.0,   1.0, gl));    // Set 4
    dynamicObjects.push(createTrack ( L_TRACK,  -3.0,   -69.0,    0.0,   1.0, gl));    // Set 5
    dynamicObjects.push(createTrack ( M_TRACK,  -3.0,   -69.0,    0.0,   1.0, gl));    // Set 5
    dynamicObjects.push(createTrack ( R_TRACK,  -3.0,   -69.0,    0.0,   1.0, gl));    // Set 5
    dynamicObjects.push(createTrack ( L_TRACK,  -3.0,   -85.0,    0.0,   1.0, gl));    // Set 6
    dynamicObjects.push(createTrack ( M_TRACK,  -3.0,   -85.0,    0.0,   1.0, gl));    // Set 6
    dynamicObjects.push(createTrack ( R_TRACK,  -3.0,   -85.0,    0.0,   1.0, gl));    // Set 6
    dynamicObjects.push(createTrack ( L_TRACK,  -3.0,  -101.0,    0.0,   1.0, gl));    // Set 7
    dynamicObjects.push(createTrack ( M_TRACK,  -3.0,  -101.0,    0.0,   1.0, gl));    // Set 7
    dynamicObjects.push(createTrack ( R_TRACK,  -3.0,  -101.0,    0.0,   1.0, gl));    // Set 7
    dynamicObjects.push(createTrack ( L_TRACK,  -3.0,  -117.0,    0.0,   1.0, gl));    // Set 8
    dynamicObjects.push(createTrack ( M_TRACK,  -3.0,  -117.0,    0.0,   1.0, gl));    // Set 8
    dynamicObjects.push(createTrack ( R_TRACK,  -3.0,  -117.0,    0.0,   1.0, gl));    // Set 8
    dynamicObjects.push(createTrack ( L_TRACK,  -3.0,  -133.0,    0.0,   1.0, gl));    // Set 9
    dynamicObjects.push(createTrack ( M_TRACK,  -3.0,  -133.0,    0.0,   1.0, gl));    // Set 9
    dynamicObjects.push(createTrack ( R_TRACK,  -3.0,  -133.0,    0.0,   1.0, gl));    // Set 9

    // Wall
    dynamicObjects.push(createWall  (-11.5,  -3.0,   -5.0,    0.0,   1.0, gl));    // Set 1
    dynamicObjects.push(createWall  ( 11.5,  -3.0,   -5.0,    0.0,   1.0, gl));    // Set 1
    dynamicObjects.push(createWall  (-11.5,  -3.0,  -30.0,    0.0,   1.0, gl));    // Set 2
    dynamicObjects.push(createWall  ( 11.5,  -3.0,  -30.0,    0.0,   1.0, gl));    // Set 2
    dynamicObjects.push(createWall  (-11.5,  -3.0,  -55.0,    0.0,   1.0, gl));    // Set 3
    dynamicObjects.push(createWall  ( 11.5,  -3.0,  -55.0,    0.0,   1.0, gl));    // Set 3
    dynamicObjects.push(createWall  (-11.5,  -3.0,  -80.0,    0.0,   1.0, gl));    // Set 4
    dynamicObjects.push(createWall  ( 11.5,  -3.0,  -80.0,    0.0,   1.0, gl));    // Set 4
    dynamicObjects.push(createWall  (-11.5,  -3.0, -105.0,    0.0,   1.0, gl));    // Set 5
    dynamicObjects.push(createWall  ( 11.5,  -3.0, -105.0,    0.0,   1.0, gl));    // Set 5
    dynamicObjects.push(createWall  (-11.5,  -3.0, -130.0,    0.0,   1.0, gl));    // Set 6
    dynamicObjects.push(createWall  ( 11.5,  -3.0, -130.0,    0.0,   1.0, gl));    // Set 6
    dynamicObjects.push(createWall  (-11.5,  -3.0, -155.0,    0.0,   1.0, gl));    // Set 7
    dynamicObjects.push(createWall  ( 11.5,  -3.0, -155.0,    0.0,   1.0, gl));    // Set 7
    dynamicObjects.push(createWall  (-11.5,  -3.0, -180.0,    0.0,   1.0, gl));    // Set 8
    dynamicObjects.push(createWall  ( 11.5,  -3.0, -180.0,    0.0,   1.0, gl));    // Set 8
    dynamicObjects.push(createWall  (-11.5,  -3.0, -205.0,    0.0,   1.0, gl));    // Set 9
    dynamicObjects.push(createWall  ( 11.5,  -3.0, -205.0,    0.0,   1.0, gl));    // Set 9
    dynamicObjects.push(createWall  (-11.5,  -3.0, -230.0,    0.0,   1.0, gl));    // Set 10
    dynamicObjects.push(createWall  ( 11.5,  -3.0, -230.0,    0.0,   1.0, gl));    // Set 10
    dynamicObjects.push(createWall  (-11.5,  -3.0, -255.0,    0.0,   1.0, gl));    // Set 11
    dynamicObjects.push(createWall  ( 11.5,  -3.0, -255.0,    0.0,   1.0, gl));    // Set 11
    dynamicObjects.push(createWall  (-11.5,  -3.0, -280.0,    0.0,   1.0, gl));    // Set 12
    dynamicObjects.push(createWall  ( 11.5,  -3.0, -280.0,    0.0,   1.0, gl));    // Set 12

    // Ground
    dynamicObjects.push(createGround(0.0, -4.0,  -5.0, 0.0, 1.0, gl)); 
    dynamicObjects.push(createGround(0.0, -4.0,-105.0, 0.0, 1.0, gl)); 

    return dynamicObjects;
}

function createStatic(gl) {
    var staticObjects = [];

    staticObjects.push(createPlayer(0.0, -2.2, -10.0, 0.0, 1.0, gl)); // Player

    return staticObjects;
}
