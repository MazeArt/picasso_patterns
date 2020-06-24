/* 
MIDI API javascript https://github.com/grimmdude/MidiWriterJS#readme 


https://docs.google.com/spreadsheets/d/17DYcHH70APYaHDIF2Zm4CLnPhKjgEmcL8a5LkepBlCs/edit#gid=0

*/

function permutation_cylce(){
    clear_music_sheet();
    var c // CYLCLE
    var b //BEAT
    var h // hit
    var v1 //voice 1 HH
    var v2 // voice 2 SD 
    var v3 // voice 3 BD
    var bd // BD hit representation??
    var paradiddle_strike
    
    
    var ss=SpreadsheetApp.getActiveSpreadsheet();
    var sheet=ss.getActiveSheet(); 
    var base_col=2;
    var base_row=10;
    var HH_row=base_row-2 ; 
    var SD_row=base_row-1 ;
    var BD_row=base_row;
    //var BD_hit_draw=sheet.getRange(base_row+(7*c),base_col+(2*b));
    
    // 10 17 24 31
    
    for(c=1; c<=4; c++){
      for(b=1; b<=4; b++){
        bd=(b+(c-1))%4;
        if(bd==0){bd=4};
        var bd_hit=bd;
        sheet.getRange(BD_row+(7*(c-1)) , base_col+bd_hit+(4*(b-1))).setValue("O").setFontWeight("bold").setHorizontalAlignment("left");
        
        for(h=1;h<=4;h++){
          
          paradiddle_strike=sheet.getRange(3,base_col+h+(4*(b-1))).getValue();
          
          if(h!==bd && paradiddle_strike=="R"){
            sheet.getRange(HH_row+(7*(c-1)) , base_col+h+(4*(b-1))).setValue("x").setFontWeight("bold").setHorizontalAlignment("center");   
          }else{
            sheet.getRange(HH_row+(7*(c-1)) , base_col+h+(4*(b-1))).setValue("|").setFontWeight("normal").setHorizontalAlignment("center");   
            
            if(h!==bd && paradiddle_strike=="L"){
              sheet.getRange(SD_row+(7*(c-1)) , base_col+h+(4*(b-1))).setValue("o").setFontWeight("bold").setHorizontalAlignment("left");   
            } else if(sheet.getRange(BD_row+(7*(c-1)) , base_col+bd_hit+(4*(b-1))).getValue()!=""){
              sheet.getRange(SD_row+(7*(c-1)) , base_col+h+(4*(b-1))).setValue("|").setFontWeight("normal").setHorizontalAlignment("center");
            }
          }
        }             
      }
    }
  }
  
  function clear_music_sheet(){
    var ss=SpreadsheetApp.getActiveSpreadsheet();
    var sheet=ss.getActiveSheet(); 
    sheet.getRange("C8:R10").clearContent();
    sheet.getRange("C15:R17").clearContent();
    sheet.getRange("C22:R24").clearContent();
    sheet.getRange("C29:R31").clearContent();
  }
  //////////////////////////////////////////////
  function write_paradiddle(){
    var ss=SpreadsheetApp.getActiveSpreadsheet();
    var sheet=ss.getActiveSheet();
    var paradiddle_strike
    var hit_history=[]
    
    
    var base_col=2;
    var base_row=10;
    var antepen_hit=h-2;
    var antepen_hit=h-1
    var hitbox="L"
    for(var h=1;h<=16;h++){
      if(Math.random()>0.5){
        hitbox="L"
        } else {
        hitbox="R"
        }
        hit_history.push(hitbox);
        }
        
        for(var h=0;h<16;h++){
          if(h>2 && hit_history[h]==hit_history[h-1] 
             && hit_history[h-1]==hit_history[h-2]){
            if(hit_history[h]=="R"){hit_history[h]="L"}
            else{hit_history[h]="R"}
          }
          
          paradiddle_strike=sheet.getRange(3,base_col+h+1).setValue(hit_history[h]);    
          
    }
    Logger.log(hit_history);
    
    
   
    //how to prvent 3 equal consecutive hits??
    
  
  }