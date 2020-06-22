window.onload =function(){
    canvas=document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');
    setInterval(mainloop,1000/50);


}

//images dimensions and scaler
const prop= 1 //this is the scaler
const bar_w=120*prop
const bar_h=30*prop
const posbar_x=20
const posbar_y=20
// voices are hats, snare , kick ...
//voices for 30x150 test
const voice_w=30*prop//each voice height and width
const voice_h=150*prop
//positions of each element
const pos1_x=posbar_x+0*voice_w
const pos1_y=20+bar_h
const pos2_x=posbar_x+(1*voice_w) //20+50
const pos2_y=20+bar_h
const pos3_x=posbar_x+2*voice_w
const pos3_y=20+bar_h
const pos4_x=posbar_x+3*voice_w
const pos4_y=20+bar_h

var i=1
var bars = new Image();
bars.src='/images/bars_'+i+'.png';

var hats = new Image();
hats.onload=function(){
    hats.src=this.src;
};
hats.src='/images/hats_'+i+'.png'


var kick = new Image();
kick.src='/images/kick_'+i+'.png';

var snare = new Image();
snare.src='/images/snare_'+i+'.png'

class Cuartina{
    constructor(x_pos,y_pos,v1,v2,v3,v4){
        this.x_pos=x_pos;
        this.y_pos=y_pos;
        this.v1=v1;
        this.v2=v2;
        this.v3=v3;
        this.v4=v4;
    }
    
    drawFigure(){
        drawImg(bars,posbar_x,posbar_y,bar_w,bar_h);
        drawImg(this.v1,pos1_x,pos1_y,voice_w,voice_h);
        drawImg(this.v2,pos2_x,pos2_y,voice_w,voice_h);
        drawImg(this.v3,pos3_x,pos3_y,voice_w,voice_h);
        drawImg(this.v4,pos4_x,pos4_y,voice_w,voice_h);
    }
   
    
    drawImg(src,x,y,w,h){
        canvasContext.drawImage(src,x,y,w,h)
    }


    //draw the 4 images
    // drawImg(bars,posbar_x,posbar_y,bar_w,bar_h);


}

var cuartina1 = new Cuartina(20,20,kick);

function mainloop(){
   // colorRec(0,0,canvas.width,canvas.height,'white')
   // idea to find objects by it's name 
   //https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-of-property
   
  //parameters are (figure,element)
   f1_v1=switch_v(1,1);
   f1_v2=switch_v(1,2);
   f1_v3=switch_v(1,3);
   f1_v4=switch_v(1,4);
  
   var cuartina1 = new Cuartina(20,20,f1_v1,f1_v2,f1_v3,f1_v4);
   cuartina1.drawFigure();
 
   

    console.log("this is working")
}



function drawImg(src,x,y,w,h){

    canvasContext.drawImage(src,x,y,w,h)

}

function checkSelectedOption(f,i){

 var v1 = document.getElementById("f"+f+"_v"+i);
 var v1_box = v1.value
console.log("the v%s value is %s",i,v1_box)
return v1_box;

}

/// REMEMBER to change v1 to general variable "v"
function switch_v(opt_fig,opt_i){
    var v1_str=checkSelectedOption(opt_fig,opt_i); 
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
    return v1
}
//https://www.youtube.com/watch?v=STdbrEojilM
//https://www.youtube.com/watch?v=i2C1hrJMwz0 how to organize 


