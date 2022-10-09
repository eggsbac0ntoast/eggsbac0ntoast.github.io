let alpha = [];
let backs = [];

function createAlpha() {
    for (let a = 0; a < 26; a++) {
        alpha.push(loadImage(`art/${a}.png`));
    }
}

function createBacks() {
    for (let z = 26; z < 31; z++) {
        backs.push(loadImage(`art/${z}.png`));
    }
}