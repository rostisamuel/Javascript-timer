function countdown(sec){
    let time = setInterval(function(){
        sec--;
        if(sec <= 0){
            clearInterval(time);
            console.log("Done!")
        } else {
            console.log(sec);
        }
    }, 1000);
    }

    function randomGame(){
        let num;
        let tries = 0
        let timer = setInterval(function(){
            num = Math.random();
            tries++
            if(num >= .75){
                clearInterval(timer);
                console.log(`Wow! It took us ${tries} try/tries to get over .75!`);
            }
        }, 1000);

    }