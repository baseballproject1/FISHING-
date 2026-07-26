// =========================
// 낚시왕 기록 / 랭킹 시스템
// ranking.js
// =========================


let ranking = {


    maxWeight:0,


    maxFish:"없음",


    maxPrice:0,


    maxLevel:1


};






// 기록 업데이트

function updateRecord(fish, weight, price){


    // 최고 무게


    if(weight > ranking.maxWeight){


        ranking.maxWeight = weight;


        ranking.maxFish = fish.name;


        addLog(

        "🏆 최고 무게 기록 갱신!"

        );


    }






    // 최고 판매가


    if(price > ranking.maxPrice){


        ranking.maxPrice = price;


    }






    // 최고 레벨


    if(level > ranking.maxLevel){


        ranking.maxLevel = level;


    }



}








// 랭킹 보기

function showRanking(){



    let text =

    "📊 나의 기록\n\n";



    text +=

    "🐟 최고 물고기 : "

    +

    ranking.maxFish

    +

    "\n";



    text +=

    "⚖️ 최고 무게 : "

    +

    ranking.maxWeight

    +

    "kg\n";



    text +=

    "💰 최고 판매가 : "

    +

    ranking.maxPrice

    +

    "G\n";



    text +=

    "⭐ 최고 레벨 : "

    +

    ranking.maxLevel;



    alert(text);


}








// 기록 초기화

function resetRanking(){


    ranking = {


        maxWeight:0,


        maxFish:"없음",


        maxPrice:0,


        maxLevel:1


    };


}
