// ========================
// 낚시왕 최종 밸런스 시스템
// balance.js
// ========================



const balance = {


    // 등급별 가격 배율

    gradeBonus:{

        "일반":1,

        "희귀":2,

        "전설":5,

        "신화":10

    },



    // 지역 보너스

    areaBonus:{

        "🏞️ 초보 낚시터":1,

        "🌿 강가":1.2,

        "🏕️ 계곡":1.5,

        "🌅 호수":2,

        "🏝️ 해변":3,

        "🌊 깊은 바다":5,

        "🌑 심해":8,

        "❄️ 얼음 바다":10,

        "🌌 신비의 바다":15,

        "👑 전설의 낚시터":20

    }


};





// 물고기 가격 계산

function calculateFishPrice(fish,weight){


    let grade =

    balance.gradeBonus[fish.grade] || 1;



    let area =

    balance.areaBonus[fish.area] || 1;



    return Math.floor(

        weight *

        fish.price *

        grade *

        area

    );


}





// 경험치 계산

function calculateExp(fish){


    let exp=10;



    if(fish.grade==="희귀"){

        exp=20;

    }



    if(fish.grade==="전설"){

        exp=50;

    }



    if(fish.grade==="신화"){

        exp=100;

    }



    return exp;


}





// 레벨 필요 경험치

function needExp(){


    return level * 100;


}





// 골드 보정

function addGold(amount){


    gold += Math.floor(amount);


    updateUI();


    saveGame();


}
