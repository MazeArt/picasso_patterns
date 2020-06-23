

let bars;
let kick;
let hats;
let snare;

function preload() {
    var i = 1
    bars = new Image();

    bars.src = 'images/bars_' + i + '.png';

    hats = new Image();

    hats.src = 'images/hats_' + i + '.png';

    kick = new Image();
    kick.src = 'images/kick_' + i + '.png';

    snare = new Image();
    snare.src = 'images/snare_' + i + '.png'


}

window.onload = function () {
    preload();
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');

    setInterval(mainloop, 1000 / 50);

}

//images dimensions and scaler
const prop = 1 //this is the scaler
const bar_w = 120 * prop
const bar_h = 30 * prop

const initpos_x = 20
const initpos_y = 20
// voices are hats, snare , kick ...
//voices for 30x150 test
const voice_w = 30 * prop//each voice height and width
const voice_h = 150 * prop
//positions of each element
const fig_offset_x = 175 //figure offset x


class Cuartina {
    constructor(fig_num, x_pos, y_pos, v1, v2, v3, v4) {
        this.fig_num = fig_num;
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
        this.v4 = v4;

        /// Define each voice position relative to fig_num and bar
        this.pos1_x = initpos_x + 0 * voice_w + (fig_num - 1) * fig_offset_x;
        this.pos1_y = 20 + bar_h;//think about second line of figs

        this.pos2_x = initpos_x + (1 * voice_w) + (fig_num - 1) * fig_offset_x;
        this.pos2_y = 20 + bar_h;

        this.pos3_x = initpos_x + 2 * voice_w + (fig_num - 1) * fig_offset_x;
        this.pos3_y = 20 + bar_h;

        this.pos4_x = initpos_x + 3 * voice_w + (fig_num - 1) * fig_offset_x;
        this.pos4_y = 20 + bar_h;

        this.initpos_x = initpos_x + (fig_num - 1) * fig_offset_x;
        this.initpos_y = initpos_y; //REMEMBER to change later
    }

    drawFigure() {
        drawImg(bars, this.initpos_x, this.initpos_y, bar_w, bar_h);
        drawImg(this.v1, this.pos1_x, this.pos1_y, voice_w, voice_h);
        drawImg(this.v2, this.pos2_x, this.pos2_y, voice_w, voice_h);
        drawImg(this.v3, this.pos3_x, this.pos3_y, voice_w, voice_h);
        drawImg(this.v4, this.pos4_x, this.pos4_y, voice_w, voice_h);
    }


    drawImg(src, x, y, w, h) {
        canvasContext.drawImage(src, x, y, w, h)
    }


    //draw the 4 images
    // drawImg(bars,posbar_x,posbar_y,bar_w,bar_h);


}


function mainloop() {

    //parameters are (figure,element)
    
    //creates a loop for v1_f1, v2_f1 etc...
    var total_figures = 2;
    var f, j
    for (f = 1; f <= total_figures; f++) {
        for (j = 1; j <= 4; j++) {
            window['f' + f + '_v' + j] = switch_v(f, j)
        }
    }
 

    var cuartina1 = new Cuartina(1, 20, 20, f1_v1, f1_v2, f1_v3, f1_v4);
    var cuartina2 = new Cuartina(2, 20, 20, f2_v1, f2_v2, f2_v3, f2_v4);

    cuartina1.drawFigure();
    cuartina2.drawFigure();

    //print?
    console.log("this is working")
}



function drawImg(src, x, y, w, h) {

    canvasContext.drawImage(src, x, y, w, h)

}

function checkSelectedOption(f, i) {

    var v1 = document.getElementById("f" + f + "_v" + i);
    var v1_box = v1.value
    console.log("the v%s value is %s", i, v1_box)
    return v1_box;

}

/// REMEMBER to change v1 to general variable "v"
function switch_v(opt_fig, opt_i) {
    var v1_str = checkSelectedOption(opt_fig, opt_i);
    switch (v1_str) {
        case 'hats_str':
            v1 = hats;
            break;
        case 'kick_str':
            v1 = kick;
            break;
        case 'snare_str':
            v1 = snare
            break;
        default:
            v1 = kick;
    }
    return v1
}
//https://www.youtube.com/watch?v=STdbrEojilM
//https://www.youtube.com/watch?v=i2C1hrJMwz0 how to organize 

// create Cuartina Class


