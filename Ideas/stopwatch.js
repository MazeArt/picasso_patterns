// more on formatting https://www.youtube.com/watch?v=jRhB1IG7uAw

function Stopwatch() {
    var time = 0;
    var interval;
    var offset;

    function update() { 
        time += delta();
        var formattedTime = timeFormatter(time);
        console.log(formattedTime);

       
    }
    function delta() { 
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;

     }
    function timeFormatter(timeInMilliseconds) { 
        var time = new Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();
        
        if(minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if(seconds.length < 2) {
            seconds = '0' + seconds;
        }
        
        while(milliseconds.length < 3) {
            milliseconds = '0' + minutes;

        }
        
        return minutes + " : " + seconds + " : " + milliseconds
    }

    this.isOn = false;

    this.start = function() {
        
        interval = setInterval(update, 10); //ms;
        offset = Date.now();
        this.isOn = true;
    }
    
    this.stop = function() {
        if (this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;

        }

    }
    this.reset = function(){
        time = 0;

    };
}

var watch = new Stopwatch();
//watch.start();

function Metronome(bpm) {
    var time = 0;
    var bpm=bpm;
    var bpm_ms_interval=1000/(bpm/60);
    var corchea_ms=bpm_ms_interval/2
    var semiCorchea_ms=bpm_ms_interval/4
    this.bar = 1;
    var beat = 1;
    var corchea = 1;
    var semiCorchea=1;
    var interval;
    var offset;
    var bar;


    function update() { 
        time += delta();
        semiCorchea += 1;
        console.log(semiCorchea)
        if(semiCorchea>16){
            semiCorchea = 1;
        }
        
        if(semiCorchea%2==0){
            corchea += 1;
            if(corchea>8){
                corchea=1
            }
        }
        if(semiCorchea%4==0){
            beat += 1;
            if(beat>4){
                beat=1
        
            }
        }
        this.bar=beat
        var formattedTime = timeFormatter(time);
        console.log("Bar %s Corchea %s semiCorchea %s",this.bar,corchea,semiCorchea);

       
    }
    function delta() { 
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;

        return timePassed;

     }
    function timeFormatter(timeInMilliseconds) { 
        var time = new Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();
        
        if(minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if(seconds.length < 2) {
            seconds = '0' + seconds;
        }
        
        while(milliseconds.length < 3) {
            milliseconds = '0' + minutes;

        }
        
        return minutes + " : " + seconds + " : " + milliseconds
    }

    this.isOn = false;

    this.start = function() {
        
        interval = setInterval(update.bind(this), semiCorchea_ms); //ms;
        offset = Date.now();
        
        this.isOn = true;
    }
    
    this.stop = function() {
        if (this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;

        }

    }
    this.reset = function(){
        time = 0;

    };
}