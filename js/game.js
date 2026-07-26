// ========================
// 낚시왕 메인 게임 최종본
// game.js
// ========================


let gold = 10000;

let level = 1;

let exp = 0;

let caughtFish = [];





// 낚시

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

            Math.random()

            *

            possibleFish.length

        )

    ];





    let weight =

    Number(

        (

        Math.random()

        *

        (

        fishData.max -

        fishData.min

        )

        +

        fishData.min

        )

        .toFixed(1)

    );






    let price;



    if(typeof calculateFishPrice === "function"){


        price = calculateFishPrice(

            fishData,

            weight

        );


    }

    else{


        price = Math.floor(

            weight *

            fishData.price

        );


    }






    let catchData = {


        name:fishData.name,


        grade:fishData.grade,


        weight:weight,


        price:price


    };





    caughtFish.push(catchData);



    gold += price;





    if(typeof calculateExp === "function"){


        exp += calculateExp(fishData);


    }

    else{


        exp += 10;


    }





    levelCheck();





    if(typeof addAquarium === "function"){


        addAquarium(catchData);


    }





    if(typeof recordContest === "function"){


        recordContest(

            fishData.name,

            weight

        );


    }





    if(typeof updateRecord === "function"){


        updateRecord(

            fishData,

            weight,

            price

        );


    }





    if(typeof checkMission === "function"){


        checkMission();


    }





    if(typeof checkAchievement === "function"){


        checkAchievement();


    }





    showCatch(

        fishData,

        weight,

        price

    );





    if(typeof saveGame === "function"){


        saveGame();


    }





    updateUI();


}







// 레벨 업

function levelCheck(){


    let need = level * 100;



    if(exp >= need){



        exp -= need;



        level++;



        alert(

        "⭐ 레벨 업!\nLv."

        +

        level

        );



        if(typeof checkArea === "function"){


            checkArea();


        }


    }


}







// 낚시 결과 표시

function showCatch(

fish,

weight,

price

){



    let result =

    document.getElementById(

        "result"

    );





    let effectText="🎣 낚시 성공!";



    if(typeof fishEffect === "function"){


        effectText = fishEffect(fish);


    }





    result.innerHTML =


    "<h2>"

    +

    effectText

    +

    "</h2>"

    +


    "🐟 "

    +

    fish.name

    +

    "<br>"

    +

    "등급 : "

    +

    fish.grade

    +

    "<br>"

    +

    "무게 : "

    +

    weight

    +

    "kg"

    +

    "<br>"

    +

    "💰 "

    +

    price

    +

    "G";



}







// 화면 업데이트

function updateUI(){



    let goldText =

    document.getElementById("gold");



    let levelText =

    document.getElementById("level");



    let areaText =

    document.getElementById("area");



    let bookText =

    document.getElementById("book");





    if(goldText)

        goldText.innerText = gold;



    if(levelText)

        levelText.innerText = level;



    if(areaText && typeof getCurrentArea==="function")

        areaText.innerText =

        getCurrentArea().name;



    if(bookText && typeof aquariumFish!=="undefined")

        bookText.innerText =

        aquariumFish.length;


}






updateUI();
