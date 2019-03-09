/****************
    CONSTANTS
****************/
// Track coordinates
const R_TRACK = 3.0;
const M_TRACK = 0.0;
const L_TRACK = -3.0;

// Directions
const RIGHT = 39;
const LEFT = 37;
const SPACE = 32;
const UP = 38;
const DOWN = 40;
const MIN_SPEED = 0.15;
const PLAYER_GROUND = -2.2;
const ON_GROUND = 0;
const IN_AIR = 1;

// Music
const MUSIC = './music.mp3';

// Textures
const TEXTURE_TRACK     = './texture/track.jpg';
const TEXTURE_WALL      = './texture/wall.png';
const TEXTURE_PLAIN     = './texture/plain.jpeg';
const TEXTURE_GRAVEL     = './texture/gravel.jpg';
const TEXTURE_BARRICADE = './texture/barricade.png';
const TEXTURE_MYSTERY   = './texture/mystery.jpg';
const TEXTURE_TRAIN     = './texture/train.jpg';
const TEXTURE_COIN     = './texture/coin.png';


// Logic                            
const TYPES = ['CUBE', 'GRUOND', 'TRACK', 'WALL', 'PLAYER', 'BARRICADE', 'TRAIN', 'COIN'];
const DESTRUCTIBLE = {
    'CUBE'      : true,
    'GROUND'    : false,
    'TRACK'     : false,
    'WALL'      : false,
    'PLAYER'    : false,
    'BARRICADE' : true,
    'TRAIN'     : true,
    'COIN'      : true,
};


/**********************
    GLOBAL VARIABLES
**********************/
// Game status
var PAUSE = false;
var GAME = true;

// Game experience
var audio = new Audio(MUSIC);
var staticObjects = null;
var dynamicObjects = null;
var start = -10.0;
var direction = [false, false, false, false]; // [left, up, down, right]
var distance = 0.0;
var speed = MIN_SPEED;
var gravity = true;
var player_position = ON_GROUND;
var base = PLAYER_GROUND;
var jump = 1;
var coins = 0;

// Lighting
var flash = false;
var grayscale = false;

// Random integer generator
function getRandomInt(min, max) 
{
    var Min = Math.ceil(min);
    var Max = Math.floor(max);
    var Random = Math.floor(Math.random() * (Max - Min + 1)) + Min;
    console.log(Random);
    return Random;
}

// Sleep
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
        ;
    }
}