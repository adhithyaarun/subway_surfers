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

/**********************
    GLOBAL VARIABLES
**********************/
// Game status
var PAUSE = false;
var GAME = true;

// Game experience
var audio = new Audio(MUSIC);
var direction = [false, false, false, false]; // [left, up, down, right]
var distance = 0.0;
var speed = MIN_SPEED;
var gravity = true;
var player_position = ON_GROUND;
var base = PLAYER_GROUND;
var jump = 1;