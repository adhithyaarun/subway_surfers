function createCube(x, y, z, r, s) {
    let cube = {
        positions: [
            -1.0 * s,-1.0 * s, 1.0 * s,
             1.0 * s,-1.0 * s, 1.0 * s,
             1.0 * s, 1.0 * s, 1.0 * s,
            -1.0 * s, 1.0 * s, 1.0 * s,

            -1.0 * s,-1.0 * s,-1.0 * s,
             1.0 * s,-1.0 * s,-1.0 * s,
             1.0 * s, 1.0 * s,-1.0 * s,
            -1.0 * s, 1.0 * s,-1.0 * s,
        ],
        indices: [
            0, 1, 2,     0, 2, 3,
            4, 5, 6,     4, 6, 7,
            1, 2, 6,     1, 5, 6,
            0, 3, 7,     0, 4, 7,
            2, 3, 6,     3, 6, 7,
            0, 1, 4,     1, 4, 5,
        ],
        colors: [
            [0.0, 0.0, 1.0, 1.0],
            [1.0, 0.0, 0.0, 1.0],
        ],
        translation: [x, y, z],
        rotation: r,
        type: 'CUBE',
    };

    return cube;
}

function createGround(x, y, z, r, s)
{
    var ground = {
        positions: [
            -7.0 * s,-0.2 * s, 100.0 * s,
             7.0 * s,-0.2 * s, 100.0 * s,
             7.0 * s, 0.2 * s, 100.0 * s,
            -7.0 * s, 0.2 * s, 100.0 * s,

            -7.0 * s,-0.2 * s,-100.0 * s,
             7.0 * s,-0.2 * s,-100.0 * s,
             7.0 * s, 0.2 * s,-100.0 * s,
            -7.0 * s, 0.2 * s,-100.0 * s,
        ],
        indices: [
            0, 1, 2,     0, 2, 3,
            4, 5, 6,     4, 6, 7,
            1, 2, 6,     1, 5, 6,
            0, 3, 7,     0, 4, 7,
            2, 3, 6,     3, 6, 7,
            0, 1, 4,     1, 4, 5,
        ],
        colors: [
            [0.57, 0.27, 0.02, 1.0],
            [0.57, 0.27, 0.02, 0.7],
        ],
        translation: [x, y, z],
        rotation: r,
        type: 'GROUND',
    };

    return ground;
}

function createTrack(x, y, z, r, s)
{
    track = {
        positions: [
            -1.0 * s,-0.2 * s, 78.0 * s,
             1.0 * s,-0.2 * s, 78.0 * s,
             1.0 * s, 0.2 * s, 78.0 * s,
            -1.0 * s, 0.2 * s, 78.0 * s,

            -1.0 * s,-0.2 * s,-78.0 * s,
             1.0 * s,-0.2 * s,-78.0 * s,
             1.0 * s, 0.2 * s,-78.0 * s,
            -1.0 * s, 0.2 * s,-78.0 * s,
        ],
        indices: [
            0, 1, 2,     0, 2, 3,
            4, 5, 6,     4, 6, 7,
            1, 2, 6,     1, 5, 6,
            0, 3, 7,     0, 4, 7,
            2, 3, 6,     3, 6, 7,
            0, 1, 4,     1, 4, 5,
        ],
        colors: [
            [0.36, 0.16, 0.0, 1.0],
            [0.36, 0.16, 0.0, 0.7],
        ],
        translation: [x, y, z],
        rotation: r,
        type: 'TRACK',
    };

    return track;
}

function createWall(x, y, z, r, s) {
    var wall = {
        positions: [
            -0.5 * s, -6.0 * s, 100.0 * s,
             0.5 * s, -6.0 * s, 100.0 * s,
             0.5 * s,  6.0 * s, 100.0 * s,
            -0.5 * s,  6.0 * s, 100.0 * s,

            -0.5 * s, -6.0 * s, -100.0 * s,
             0.5 * s, -6.0 * s, -100.0 * s,
             0.5 * s,  6.0 * s, -100.0 * s,
            -0.5 * s,  6.0 * s, -100.0 * s,
        ],
        indices: [
            0, 1, 2, 0, 2, 3,
            4, 5, 6, 4, 6, 7,
            1, 2, 6, 1, 5, 6,
            0, 3, 7, 0, 4, 7,
            2, 3, 6, 3, 6, 7,
            0, 1, 4, 1, 4, 5,
        ],
        colors: [
            [0.11, 0.05, 0.0, 1.0],
            [0.11, 0.05, 0.0, 0.7],
        ],
        translation: [x, y, z],
        rotation: r,
        type: 'WALL',
    };

    return wall;
}

function createPlayer(x, y, z, r, s) {
    let player = {
        positions: [
            -0.4 * s, -0.7 * s, 0.2 * s,
             0.4 * s, -0.7 * s, 0.2 * s,
             0.4 * s,  0.7 * s, 0.2 * s,
            -0.4 * s,  0.7 * s, 0.2 * s,

            -0.4 * s, -0.7 * s, -0.2 * s,
             0.4 * s, -0.7 * s, -0.2 * s,
             0.4 * s,  0.7 * s, -0.2 * s,
            -0.4 * s,  0.7 * s, -0.2 * s,
        ],
        indices: [
            0, 1, 2, 0, 2, 3,
            4, 5, 6, 4, 6, 7,
            1, 2, 6, 1, 5, 6,
            0, 3, 7, 0, 4, 7,
            2, 3, 6, 3, 6, 7,
            0, 1, 4, 1, 4, 5,
        ],
        colors: [
            [0.0, 0.0, 1.0, 1.0],
            [0.0, 1.0, 1.0, 1.0],
        ],
        translation: [x, y, z],
        rotation: r,
        type: 'PLAYER',
    };

    return player;
}

function createBar(x, y, z, r, s) {
    let barricade = {
        positions: [
            -0.6 * s, -0.5 * s, 0.1 * s,
             0.6 * s, -0.5 * s, 0.1 * s,
             0.6 * s,  0.5 * s, 0.1 * s,
            -0.6 * s,  0.5 * s, 0.1 * s,

            -0.6 * s, -0.5 * s, -0.1 * s,
             0.6 * s, -0.5 * s, -0.1 * s,
             0.6 * s,  0.5 * s, -0.1 * s,
            -0.6 * s,  0.5 * s, -0.1 * s,
        ],
        indices: [
            0, 1, 2, 0, 2, 3,
            4, 5, 6, 4, 6, 7,
            1, 2, 6, 1, 5, 6,
            0, 3, 7, 0, 4, 7,
            2, 3, 6, 3, 6, 7,
            0, 1, 4, 1, 4, 5,
        ],
        colors: [
            [1.0, 0.0, 0.0, 1.0],
            [0.0, 0.0, 1.0, 1.0],
        ],
        translation: [x, y, z],
        rotation: r,
        type: 'BARRICADE',
    };

    return barricade;
}

function createTrain(x, y, z, r, s) {
    let color = [Math.random(), Math.random(), Math.random(), 1.0];
    let train = {
        positions: [
            -1.2 * s, -1.0 * s, 15.0 * s,
             1.2 * s, -1.0 * s, 15.0 * s,
             1.2 * s,  1.0 * s, 15.0 * s,
            -1.2 * s,  1.0 * s, 15.0 * s,

            -1.2 * s, -1.0 * s, -15.0 * s,
             1.2 * s, -1.0 * s, -15.0 * s,
             1.2 * s,  1.0 * s, -15.0 * s,
            -1.2 * s,  1.0 * s, -15.0 * s,
        ],
        indices: [
            0, 1, 2, 0, 2, 3,
            4, 5, 6, 4, 6, 7,
            1, 2, 6, 1, 5, 6,
            0, 3, 7, 0, 4, 7,
            2, 3, 6, 3, 6, 7,
            0, 1, 4, 1, 4, 5,
        ],
        colors: [
            color,
            color,
        ],
        translation: [x, y, z],
        rotation: r,
        type: 'TRAIN',
    };

    return train;
}

