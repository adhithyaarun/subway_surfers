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
const GROUND_LEVEL = -4.0;
const TRACK_LEVEL = -3.0;

// Music
const MUSIC = './music.mp3';

// Textures
const TEXTURE_TRACK     = './texture/track.jpg';
const TEXTURE_WALL      = './texture/wall.png';
const TEXTURE_PLAIN     = './texture/plain.jpeg';
const TEXTURE_GRAVEL    = './texture/gravel.jpg';
const TEXTURE_BARRICADE = './texture/barricade.png';
const TEXTURE_MYSTERY   = './texture/mystery.jpg';
const TEXTURE_TRAIN     = './texture/train.jpg';
const TEXTURE_COIN      = './texture/coin.jpeg';
const TEXTURE_BOOT      = './texture/boot.jpg';
const TEXTURE_JETPACK   = './texture/jetpack.png';
const TEXTURE_MAGNET    = './texture/magnet.jpg';
const TEXTURE_POLICE    = './texture/police.jpg';
const TEXTURE_PLAYER    = './texture/player.jpeg';
const TEXTURE_BANANA    = './texture/banana.jpeg';
const TEXTURE_OIL       = './texture/oil.png';
const TEXTURE_CITY      = './texture/city.jpg';

// Logic                            
const WIN_LENGTH = 6350.0;
const TYPES = ['CUBE', 'GRUOND', 'TRACK', 'WALL', 'PLAYER', 'BARRICADE', 'TRAIN', 'COIN', 'BOOT', 'JETPACK', 'MAGNET', 'OIL', 'BANANA', 'CITY'];
const DESTRUCTIBLE = {
    'CUBE'      : false,
    'GROUND'    : false,
    'TRACK'     : false,
    'WALL'      : false,
    'PLAYER'    : false,
    'BARRICADE' : false,
    'TRAIN'     : false,
    'COIN'      : false,
    'BOOT'      : false,
    'JETPACK'   : false,
    'MAGNET'    : false,
    'OIL'       : false,
    'BANANA'    : false,
    'CITY'      : false,
};


/**********************
    GLOBAL VARIABLES
**********************/
// Game status
var PAUSE = false;
var GAME = true;
var WIN = false;

// Game experience
var audio = new Audio(MUSIC);

// Objects
var staticObjects = [];
var dynamicObjects = [];
var dynamicBuffers = [];
var staticBuffers = [];

// Metrics and Flags
var start = -10.0;
var direction = [false, false, false, false]; // [left, up, down, right]
var distance = 0.0;
var actual_distance = 0.0;

// Movement
var speed = MIN_SPEED;
var gravity = true;
var player_position = ON_GROUND;
var base = PLAYER_GROUND;
var ground = GROUND_LEVEL;
var first_ground = true;

// Danger
var danger_flag = false;

// Powerup settings
var jump = 1.0;
var keep_jump = false;
var coins = 0;
var jetpack_flag = false;
var pushDown = 8.0;
var magnet_flag = false;

// Positioning
var last_powerup = 0.0;
var last_slip = 0.0;

// Lighting
var flash = false;
var grayscale = false;

// Random integer generator
function getRandomInt(min, max) 
{
    var Min = Math.ceil(min);
    var Max = Math.floor(max);
    var Random = Math.floor(Math.random() * (Max - Min + 1)) + Min;
    return Random;
}

// Sleep
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
        ;
    }
}

// Display Message
function displayMessage(prompt) {
  $('#message').html(String(prompt));
}