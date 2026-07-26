// ========================
// 낚시왕 메인 게임
// game.js
// ========================


let gold = 10000;

let level = 1;

let exp = 0;

let caughtFish = [];

let maxWeightFish = null;

let maxPriceFish = null;



// 낚시 실행

function fish(){


    let areaData = getCurrentArea();


    let possibleFish = fishList.filter(

        f => f.area === areaData.name

    );



    if(possibleFish.length === 0){

        possibleFish = fishList;

    }



    let fishData =

    possibleFish[

        Math.floor(
            Math.random()*possibleFish.length
        )

    ];



    let weight =

    (

        Math.random()

        *

        (fishData.max-fishData.min)

        +

        fishData.min

    ).toFixed(1);



    let price =

    Math.floor(

        weight * fishData.price

    );



    caughtFish.push({

        name:fishData.name,

        grade:fishData.grade,

        weight:Number(weight),

        price:price

    });



    gold += price;



    exp += 10;



    levelCheck();



    addAquarium({

        name:fishData.name,

        grade:fishData.grade

    });



    recordContest(

        fishData.name,

        Number(weight)

    );



    updateRecord(

        fishData,

        Number(weight),

        price

    );



    checkAchievement();



    showCatch(

        fishData,

        weight,

        price

    );


    updateUI();


    saveGame();


}





// 레벨 체크

function levelCheck(){


    if(exp >= level*100){


        exp=0;


        level++;


        alert(

        "⭐ 레벨 업!\nLv."+level

        );


        checkArea();


    }


}




// 낚시 결과 표시

function showCatch(fish,weight,price){


    let result =

    document.getElementById("result");



    result.innerHTML =

    "🎣 낚시 성공!<br><br>"+

    fish.name+

    "<br>등급 : "+

    fish.grade+

    "<br>무게 : "+

    weight+

    "kg<br>"+

    "판매가 : "+

    price+

    "G";



}





// 화면 업데이트

function updateUI(){


    document.getElementById("gold").innerText=

    gold;



    document.getElementById("level").innerText=

    level;



    document.getElementById("area").innerText=

    getCurrentArea().name;



    document.getElementById("book").innerText=

    aquariumFish.length;


}





// 시작

updateUI();
