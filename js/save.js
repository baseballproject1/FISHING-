// ========================
// 낚시왕 저장 시스템
// save.js
// ========================



// 전체 저장

function saveGame(){


    let data = {


        gold:gold,


        level:level,


        exp:exp,


        caughtFish:caughtFish,


        maxWeightFish:maxWeightFish,


        maxPriceFish:maxPriceFish,


        time:Date.now()


    };



    localStorage.setItem(

        "FishingKingSave",

        JSON.stringify(data)

    );


}





// 전체 불러오기

function loadGame(){


    let data =

    localStorage.getItem(

        "FishingKingSave"

    );



    if(data){


        data = JSON.parse(data);



        gold = data.gold ?? 10000;


        level = data.level ?? 1;


        exp = data.exp ?? 0;


        caughtFish = data.caughtFish ?? [];


        maxWeightFish = data.maxWeightFish ?? null;


        maxPriceFish = data.maxPriceFish ?? null;



    }


}





// 데이터 삭제

function resetGame(){


    let check = confirm(

        "정말 초기화할까요?"

    );



    if(check){


        localStorage.clear();


        location.reload();


    }


}





loadGame();
