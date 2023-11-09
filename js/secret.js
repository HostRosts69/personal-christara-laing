var interact1 = false;
function secretMove(done = interact1){
    if(done){
        return ;
    } else {
        window.alert("You really aren't suppost to be here... be careful");
        window.alert("And please don't double click the eyes...");
        document.getElementById("secret").addEventListener("dblclick", function(event) {
            secretDouble();
          });
        interact1 = true;
    }

};

// opens new screen for the rest of the secret
var interact2 = false;
function secretDouble(){
    if(interact2){
        return ;
    }else{
        stopPlease = window.open('//secret/you-need-to-stop.html', "", "width=500, height=600");
        stopPlease.addEventListener("load", (event) => {
            var ranMoveTime = 5;
            while (ranMoveTime >= 0){
                stopPlease.moveTo(getRandomInt(1080), getRandomInt(1080));
                ranMoveTime -= 1
            }
          });
    }
};

// prompt telling you how to go deeper on window screen
var interact3 = false;
function goDeeper(){
    if (interact3){
        return ;
    }else{
        window.alert("Are you sure you want to go deeper?");
        window.alert("Okay then just click and follow alice down the rabbithole... I warned you though!");
        interact3 = true;
    }
}

var interact4 = false;
function secretEnd (){
    window.location.replace("/articles/article_02.html");
    window.resizeTo(window.screen.availWidth , window.screen.availHeight);
}
//js refrences used:
//https://blogdown-demo.rbind.io/2018/01/31/gif-animations/
//https://developer.mozilla.org/en-US/docs/Web/API/Window
//https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
//https://www.w3schools.com/jsref/met_win_moveto.asp
//https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
//https://www.w3schools.com/jsref/met_loc_replace.asp

//resize screen:
//https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo
//https://developer.mozilla.org/en-US/docs/Web/API/Screen/availWidth

// code to support from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }