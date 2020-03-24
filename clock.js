// var degrees = 45;

// var el = document.getElementById("myElement");
// el.style.transform = "rotate(" + degrees + "deg)";

// secondRotation(0); // returns 0
// secondRotation(59); // returns (59 / 60) * 360

// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360

// setInterval(function(){
//     console.log("TICK!");
//  }, 1000);
//  setInterval(functionYouWantToRun, millisecondsDelay);

//  setInterval(function(){
//     console.log("TICK!");
//  }, 1000);

// setInterval(setClock, 1000)

    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() // 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) // 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) //12
    function setClock() {
    
}

// #YOUTUBE