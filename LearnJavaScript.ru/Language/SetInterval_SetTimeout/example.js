/**
 * Created by ermo4enkov on 3/7/17.
 */
//Recursuve setTimeout

var timerId = setTimeout(function tick(){
    console.log("Tick");
    timerId = setTimeout(tick, 2000);
}, 2000);