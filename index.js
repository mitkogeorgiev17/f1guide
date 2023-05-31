const clickArea = $(".click-area");
const displayText = $(".display-text");
const scoreElements = $(".score");
const pbScore = 200000;

const scoreHistory = [];

const MIN_CHANGE = 5700;
const MAX_CHANGE = 10000;

let startTime = 0;
let waitingForClick = false;

function play(){
    let msTillChange = Math.floor(Math.random() * (MAX_CHANGE-MIN_CHANGE)) + MIN_CHANGE;

    $(".one .lightable").addClass("light-on");
    setTimeout(function(){
        $(".two .lightable").addClass("light-on");
        setTimeout(function(){
            $(".three .lightable").addClass("light-on");
            setTimeout(function(){
                $(".four .lightable").addClass("light-on");
                setTimeout(function(){
                    $(".five .lightable").addClass("light-on");
                },1000);
            },1000);
        },1000);
    },1000);
    $(".display-text").html("...");

    setTimeout(function(){
        startTime = Date.now();

        $(".lightable").removeClass("light-on");
        waitingForClick = true;
    },msTillChange);
}

function addScore(score){
    scoreHistory.unshift(score);

    for (let i = 0; i < Math.min(scoreHistory.length, 5); i++) {
        const score = scoreHistory[i];

        scoreElements[i].textContent = `${score} seconds.`;
    }
}

$(".click-area").click(function(){
    if (waitingForClick){
        const score = (Date.now() - startTime) / 1000;
        
        waitingForClick = false;
        $(".display-text").html("Your time was " + score + " ms. Click to play again.");

        addScore(score);
    } else {
        play();
    }
});