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

Mousetrap.bind('g', () => {
    grayscale = !grayscale;
});

Mousetrap.bind('f', () => {
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
});

Mousetrap.bind('p', () => {
    PAUSE = !PAUSE;
    displayMessage('GAME PAUSED');
});

Mousetrap.bind('q', () => {
    GAME = false;
    displayMessage('YOU QUIT');
});