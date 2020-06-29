
let pattern_mapy = {
  kick_arr: [1, 0, 0, 0, 0, 0, 0, 1],
  snare_arr: [0, 0, 0, 0, 1, 0, 0, 0],
  hats_arr: [1, 1, 1, 1, 1, 1, 1, 1]
}

function play_moi() {
  sequencer(pattern_mapy);
}

document.querySelector('#init_button').addEventListener('click', async () => {
  await Tone.start()
  console.log('audio is ready')
})

let isPlaying = false


function sequencer(pattern_map) {
  //https://github.com/Tonejs/Tone.js#starting-audio
  Tone.start()
  Tone.context.latencyHint = 'playback'

   let kickBuff = new Tone.Buffer('sounds/kick.mp3');
  let snare_accBuff= new Tone.Buffer('sounds/snare_acc.mp3');
  let snareBuff= new Tone.Buffer('sounds/snare.mp3');
  let hhBuff= new Tone.Buffer('sounds/hats_closed.mp3');

  
   let kick_tone = new Tone.Player(kickBuff).toMaster();
   let snare_acc_tone = new Tone.Player(snare_accBuff).toMaster();
   let snare_tone = new Tone.Player(snareBuff).toMaster();
   let hh_tone = new Tone.Player(hhBuff).toMaster();
  
  

  let index = 0;

  Tone.Transport.scheduleRepeat(time => {
    repeat(time);
  }, "16n");
  Tone.Transport.bpm.value = 70
  Tone.Transport.start();



  function repeat(time) {
    if (Tone.context.state !== 'running') {
      Tone.context.resume();
    }
    isPlaying = true
    let step = index % 16;
    let kickInput = pattern_map.kick_arr[step];
    console.log(step);
    if (kickInput) {
      kick_tone.start(time);
      console.log(step, " kick!")
    }
    if (pattern_map.snare_arr[step]) {
      snare_tone.volume.value = -22
      snare_tone.start(time);
      console.log(step, " snare!")
    }
    if (pattern_map.snare_acc_arr[step]) {
      // snare_acc.volume.value = 0
      snare_acc_tone.start(time);
      console.log(step, " snare_acc!")
    }
    if (pattern_map.hats_arr[step]) {
      hh_tone.volume.value = -14
      hh_tone.start(time);

      console.log(step, " hh!")
    }
    index++;
  }

}

function stopSeq() {



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