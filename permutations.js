$(document).ready(function () 
{
    $('.letter').keypress(function ()
    {
        $(this).next().select();
    });
});

window.addEventListener('load', permutation_cylce);
//https://www.javascripttutorial.net/javascript-multidimensional-array/

let base_kick=[[1,0,0,0,  0,1,0,0,  0,0,1,0,  0,0,0,1],
                [0,1,0,0,  0,0,1,0,  0,0,0,1,  1,0,0,0],
                [0,0,1,0,  0,0,0,1,  1,0,0,0,  0,1,0,0],
                [0,0,0,1,  1,0,0,0,  0,1,0,0,  0,0,1,0]
                ]

let paraddidle=['R','L','R','L','R','L','R','L','R','L','R','L','R','L','R','L']
let output=[[]]



function permutation_cylce(){
    
    // if base_kick=1 then K
    // if base_kick=0 
            //if "R" then H , if "L" then S
    console.log('init')
    var i
    for(i=0;i<8;i++){

        if(base_kick[0][i]==1){
            output[i]='K';
            
            console.log(base_kick[0][i],output[i])
        } else {
            if(paraddidle[i]=='R'){
                output[i]='S';
            
                console.log(base_kick[0][i],output[i])
            }else {
                paraddidle[i]=='L';
                output[i]='H';

                console.log(paraddidle[i],output[i])
            }
        
        }
    }

        console.log(output)
   }