// ========================
// 낚시왕 저장 시스템 최종본
// save.js
// ========================


function saveGame(){


    let data = {


        // 기본 데이터

        gold: gold,

        level: level,

        exp: exp,

        caughtFish: caughtFish,



        // 기록

        ranking: ranking,



        // 지역

        currentArea: currentArea,



        // 배

        boatLevel: boatLevel,



        // 수족관

        aquariumFish: aquariumFish,

        aquariumRewards: aquariumRewards,



        // 아이템

        inventory: inventory,



        // 미션

        missions: missions,



        // 업적

        achievements: achievements,



        // 대회

        contest: contest


    };



    localStorage.setItem(

        "FishingKingSave",

        JSON.stringify(data)

    );


}






function loadGame(){


    let data =

    localStorage.getItem(

        "FishingKingSave"

    );



    if(!data){

        return;

    }



    data = JSON.parse(data);



    gold = data.gold ?? 10000;


    level = data.level ?? 1;


    exp = data.exp ?? 0;



    caughtFish =

    data.caughtFish ?? [];




    if(typeof ranking !== "undefined"){


        ranking =

        data.ranking ?? ranking;


    }



    if(typeof currentArea !== "undefined"){


        currentArea =

        data.currentArea ?? 0;


    }



    if(typeof boatLevel !== "undefined"){


        boatLevel =

        data.boatLevel ?? 0;


    }



    if(typeof aquariumFish !== "undefined"){


        aquariumFish =

        data.aquariumFish ?? [];


    }



    if(typeof aquariumRewards !== "undefined"){


        aquariumRewards =

        data.aquariumRewards ?? aquariumRewards;


    }



    if(typeof inventory !== "undefined"){


        inventory =

        data.inventory ?? inventory;


    }



    if(typeof missions !== "undefined"){


        missions =

        data.missions ?? missions;


    }



    if(typeof achievements !== "undefined"){


        achievements =

        data.achievements ?? achievements;


    }



    if(typeof contest !== "undefined"){


        contest =

        data.contest ?? contest;


    }



}






function resetGame(){


    if(confirm("저장 데이터를 삭제할까요?")){


        localStorage.removeItem(

            "FishingKingSave"

        );


        location.reload();


    }


}





loadGame();
