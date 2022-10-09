let testim;


function setup () {
    let cnv;
    cnv = createCanvas(500,600);
    cnv.position(windowWidth / 2 - 250, 0);
    background(110);

    createAlpha();

    console.log('oh shit');


    // test = new char('c', 100, 100);
    // test.show();
}

function draw() {
    
    
    
    image(alpha[0], 0, 0);
    drawGrid();
}
