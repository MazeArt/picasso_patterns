
window.addEventListener('load', permutation_cylce);
//https://www.javascripttutorial.net/javascript-multidimensional-array/

let base_kick = [
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
]

let pattern_map = {
    kick_arr: [],
    snare_arr: [],
    hats_arr: []
}

let paraddidle = ['R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L']
let output = []
let paradiddle_str

function generate_random_paradiddle() {
    draw_figures();
    for (var i = 0; i < 16; i++) {
        if (Math.random() > 0.5) {
            paraddidle[i] = 'R'
        } else {
            paraddidle[i] = 'L'
        }

    }
    paraddidle_str = paraddidle.join(' ');
    console.log(paraddidle_str);
    paraddidle_str_cons = paraddidle_str.slice(0, 8) + "  " + paraddidle_str.slice(8, 16) + "  " + paraddidle_str.slice(16, 24) + "  " + paraddidle_str.slice(24, 32);
    console.log(paraddidle_str_cons);
    document.getElementById('paradiddle1').innerHTML = paraddidle_str.slice(0, 8);
    document.getElementById('paradiddle2').innerHTML = paraddidle_str.slice(8, 16);
    document.getElementById('paradiddle3').innerHTML = paraddidle_str.slice(16, 24);
    document.getElementById('paradiddle4').innerHTML = paraddidle_str.slice(24, 32);


}


function permutation_cylce() {
    paraddidle_str = paraddidle.join(' ');
    document.getElementById('paradiddle1').innerHTML = paraddidle_str;
    // if base_kick=1 then K
    // if base_kick=0 
    //if "R" then H , if "L" then S
    console.log('init')
    var i
    for (i = 0; i < 16; i++) {

        if (base_kick[0][i] == 1) {
            output[i] = 'K';

            console.log(base_kick[0][i], output[i])
        } else {
            if (paraddidle[i] == 'R') {
                output[i] = 'S';

                console.log(base_kick[0][i], output[i])
            } else {
                paraddidle[i] == 'L';
                output[i] = 'H';

            }
            // accents in bars 2 & 4
            if (output[4] == 'S') {
                output[4] = 'A'
            }
            if (output[8] == 'S') {
                output[8] = 'A'
            }
            console.log(paraddidle[i], output[i])


        }
    }

    console.log(output)
    return output;
}

function draw_figures() {
    console.log("permutation_cylce::");
    permutation_cylce()
    //K=0,S=1,H=2, A=3
    var total_figures = 4
    for (f = 1; f <= total_figures; f++) {
        for (j = 1; j <= 4; j++) {

            v = (f - 1) * 4 + j - 1;
            var voice = output[v];

            console.log(v, " the voice is: ", voice)
            var optionIndex
            switch (voice) {
                case 'K':
                    optionIndex = 0;
                    break;
                case 'S':
                    optionIndex = 1;
                    break;
                case 'H':
                    optionIndex = 2;
                    break;
                case 'A':
                    optionIndex = 3;
                    break;
                default:
                    optionIndex = 0;
            }
            var string = "f" + f + "_v" + j;
            console.log(string, optionIndex)
            selectOptionBox(string, optionIndex)

        }
    }

}

function selectOptionBox(id, optionIndex) {
    let element = document.getElementById(id);
    element.selectedIndex = optionIndex;

}

function play_me() {

    var kick_arr = [];
    var snare_arr = [];
    var snare_acc_arr = [];
    var hats_arr = [];
    for (var i = 0; i < output.length; i++) {
        if (output[i] == 'K') {
            kick_arr[i] = 1
        } else {
            kick_arr[i] = 0
        }

        if (output[i] == 'S') {
            snare_arr[i] = 1
        } else {
            snare_arr[i] = 0
        }
        if (output[i] == 'A') {
            snare_acc_arr[i] = 1
        } else {
            snare_acc_arr[i] = 0
        }

        if (output[i] == 'H') {
            hats_arr[i] = 1
        } else {
            hats_arr[i] = 0
        }
    }

    console.log(output, kick_arr, snare_arr, snare_acc_arr, hats_arr);
    pattern_map.kick_arr = kick_arr;
    pattern_map.snare_arr = snare_arr;
    pattern_map.hats_arr = hats_arr;
    pattern_map.snare_acc_arr = snare_acc_arr;

    console.log(isPlaying)
    //start / stop 
    if (isPlaying) {

        Tone.Transport.stop();
        Tone.Transport.cancel();
        isPlaying = false
    } else {
        console.log(isPlaying)
        sequencer(pattern_map);

    }

    var btn = document.getElementById("start_button");
    console.log(btn.innerHTML);
    if (btn.innerHTML == "Play it !") {
        btn.innerHTML = "Stop"
    }
    else { btn.innerHTML = "Play it !" };


}