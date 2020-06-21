window.onload =function(){
    canvas=document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');
    setInterval(mainloop,1000/50);


}
const prop= 1/2
const bar_w=412*prop
const bar_h=70*prop
const posbar_x=20
const posbar_y=20
// voices are hats, snare , kick ...
const voice_w=102*prop//each voice height and width
const voice_h=400*prop
//positions of each element
const pos1_x=posbar_x+0*voice_w
const pos1_y=20+bar_h
const pos2_x=posbar_x+(1*voice_w) //20+50
const pos2_y=20+bar_h
const pos3_x=posbar_x+2*voice_w
const pos3_y=20+bar_h
const pos4_x=posbar_x+3*voice_w
const pos4_y=20+bar_h

function mainloop(){
   // colorRec(0,0,canvas.width,canvas.height,'white')
   // idea to find objects by it's name 
   //https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-of-property
 
   switch_v1(); //replace switch blocks
   
   var v1_str=checkSelectedOption(1); 
    switch(v1_str) {
    case 'hats_str':
      v1=hats;
      break;
    case 'kick_str':
        v1=kick;
        break;
    case 'snare_str':
        v1=snare
      break;
    default:
        v1=kick;
    }
   ///v1=hats;
   v2=kick;
   v3=snare;
   v4=hats;


    drawImg(bars,posbar_x,posbar_y,bar_w,bar_h);
    drawImg(v1,pos1_x,pos1_y,voice_w,voice_h);
    drawImg(v2,pos2_x,pos2_y,voice_w,voice_h);
    drawImg(v3,pos3_x,pos3_y,voice_w,voice_h);
    drawImg(v4,pos4_x,pos4_y,voice_w,voice_h);


    console.log("this is working")
}

var bars = new Image();
bars.src='/images/bars.png';

var hats = new Image();
hats.src='/images/hats.png';

var kick = new Image();
kick.src='/images/kick.png';

var snare = new Image();
snare.src='/images/snare.png'


function drawImg(src,x,y,w,h){
    canvasContext.drawImage(src,x,y,w,h)

}

function checkSelectedOption(i){

 var v1 = document.getElementById("v"+i);
 var v1_box = v1.value
console.log("the v%s value is %s",i,v1_box)
return v1_box;

}

function switch_v1(){
     //do nothing yet  
}
//https://www.youtube.com/watch?v=STdbrEojilM
//https://www.youtube.com/watch?v=i2C1hrJMwz0 how to organize 