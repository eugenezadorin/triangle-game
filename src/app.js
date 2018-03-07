import Grid from './Grid';

function game()
{
    let appContainer = document.getElementById('app');
    const grid = new Grid(appContainer);
    grid.initHoles();
    grid.initChips(); 
}

window.addEventListener('load', game);