$(document).keydown((event) => {
    var key = event.which;
    
    if(key == LEFT)
    {   
        direction[0] = true;
    }
    else if(key == RIGHT)
    {   
        direction[3] = true;
    }

    if(key == SPACE || key == UP)
    {
        direction[1] = true;
    }
    else if(key == DOWN)
    {
        direction[2] = true;
    }
});

Mousetrap.bind('p', () => {
    PAUSE = !PAUSE;
});

Mousetrap.bind('q', () => {
    GAME = false;
});