
window.addEventListener('load', permutation_cylce);
//https://www.javascripttutorial.net/javascript-multidimensional-array/

let base_kick = [
[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
]

let paraddidle = ['R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L', 'R', 'L']
let output = [[]]
let paradiddle_str

function generate_random_paradiddle() {
    for (var i = 0; i < 8; i++) {
        if (Math.random() > 0.5) {
            paraddidle[i] = 'R'
        } else {
            paraddidle[i] = 'L'
        }

    }
    paraddidle_str = paraddidle.join(' ');
    document.getElementById('paradiddle').innerHTML = paraddidle_str;

}


function permutation_cylce() {
    paraddidle_str = paraddidle.join(' ');
    document.getElementById('paradiddle').innerHTML = paraddidle_str;
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

                console.log(paraddidle[i], output[i])
            }

        }
    }

    console.log(output)
    return output;
}

function draw_figures() {
    console.log("permutation_cylce::");
    permutation_cylce()
    //K=0,S=1,H=2
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
