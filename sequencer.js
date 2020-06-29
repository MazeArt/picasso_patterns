
let pattern_mapy= {
    kick_arr: [1,0,0,0,0,0,0,1],
    snare_arr: [0,0,0,0,1,0,0,0],
    hats_arr: [1,1,1,1,1,1,1,1]
}

function play_moi(){
    sequencer(pattern_mapy);
}

// let kick_tone; 
// let snare_acc_;tone; 
// let snare_tone; 
// let hh_tone;
let isPlaying=false


function sequencer(pattern_map){
    //https://github.com/Tonejs/Tone.js#starting-audio


   let kick_tone = new Tone.Player('sounds/kick.mp3').toMaster();
   let snare_acc_tone = new Tone.Player('sounds/snare_acc.mp3').toMaster();
   let snare_tone = new Tone.Player('sounds/snare.mp3').toMaster();
   let hh_tone = new Tone.Player('sounds/hats_closed.mp3').toMaster();
    //const hh_2 = new Tone.Player('./sounds/hats_closed.mp3').toMaster();
    let index=0;

    Tone.Transport.scheduleRepeat(time => {
        repeat(time);
      }, "16n");
    Tone.Transport.bpm.value = 70
    Tone.Transport.start();
    
    

    function repeat(time){
        if (Tone.context.state !== 'running') {
            Tone.context.resume();
        }
        isPlaying=true
        let step = index % 16;
        let kickInput = pattern_map.kick_arr[step];
        console.log(step);
        if(kickInput){
            kick_tone.start(time);
            console.log(step," kick!")
        }
        if(pattern_map.snare_arr[step]){
          snare_tone.volume.value = -22
          snare_tone.start(time);
            console.log(step," snare!")
        }
        if(pattern_map.snare_acc_arr[step]){
           // snare_acc.volume.value = 0
           snare_acc_tone.start(time);
            console.log(step," snare_acc!")
        }
        if(pattern_map.hats_arr[step]){ 
           hh_tone.volume.value = -14
          hh_tone.start(time);
    
            console.log(step," hh!")
        }
        index++;
    }

}

function stopSeq(){



}  


// :::::::: P5 Solution
// let hh; //container sound
// let hPat; // hh pattern
// let hPhrase; //HH phrase
// let drums // PART 

// function setup() {
//     createCanvas(400, 400);
//     hh = loadSound('sounds/hats_closed.mp3',() => {} );
//     hPat=[1,1,1,0];
//     hPhrase = new p5.Phrase('hh', ()=> {} , hPat )
//     drums = new p5.Part();
//     drums.addPhrase(hPhrase);
// }


// function draw() {
//     background(220);
// }