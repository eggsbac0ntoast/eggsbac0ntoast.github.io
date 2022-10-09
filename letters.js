class char {
    constructor(c, x, y) {
        this.c = c;
        this.x = x;
        this.y = y;
        this.img = '';
    }

    show () {
        Image(this.img, this.x, this.y);
    }
}
function keyReleased() {
    if (keyCode == 65) {
        console.log('beep');
    }
}