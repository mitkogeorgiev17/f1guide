start();

function start(){
    $("#reaction").html("Your reaction time: ");
    var randomTime = Math.floor(Math.random()*4000);

    $(".f1-lights").click(function(){
        lightsOn();
        setTimeout(function(){
            $(".f1light").css("background-color","rgb(41,41,41)");
            var startTime = Date.now();
            $(".f1-lights").click(function(){
                $(".f1-lights").off('click');
                var endTime = Date.now();
                var reactionTime = endTime - startTime;
                $("#reaction").html("Your reaction time: " + reactionTime/1000 + " seconds.");
                $(".f1-lights").click(function(){
                    start();
                });
            });
        },4000+randomTime);
    })
}

function lightsOn(){
    $(".one #lightable").css("background-color","red");
    setTimeout(function(){
        $(".two #lightable").css("background-color","red");
        setTimeout(function(){
            $(".three #lightable").css("background-color","red");
            setTimeout(function(){
                $(".four #lightable").css("background-color","red");
                setTimeout(function(){
                    $(".five #lightable").css("background-color","red");
                },1000);
            },1000);
        },1000);
    },1000);
}
