let pokemons = ["one", "two", "three", "four"];

function setup() {
    createCanvas(200, 300);
    background(100);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill("pink");
    let ypos = 50;

    for ( let index=0; index< pokemons.length; index++) {
        text( pokemons[index], width/2, ypos);
        ypos = ypos + 35;
    }
}