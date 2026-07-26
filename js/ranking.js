// ========================
// 낚시왕 기록 & 랭킹 시스템
// ranking.js
// ========================


let ranking = {

    maxWeight:0,

    maxWeightFish:"",

    maxPrice:0,

    maxPriceFish:""

};





// 기록 갱신

function updateRecord(fish,weight,price){


    if(weight > ranking.maxWeight){


        ranking.maxWeight = weight;


        ranking.maxWeightFish = fish.name;


    }



    if(price > ranking.maxPrice){


        ranking.maxPrice = price;


        ranking.maxPriceFish = fish.name;


    }



    saveRanking();


}





// 기록 보기

function showRanking(){


    let text =

    "📊 나의 기록\n\n";



    text +=

    "🏆 최고 무게\n"

    +

    ranking.maxWeightFish

    +

    "\n"

    +

    ranking.maxWeight

    +

    "kg\n\n";



    text +=

    "💰 최고 판매가\n"

    +

    ranking.maxPriceFish

    +

    "\n"

    +

    ranking.maxPrice

    +

    "G";



    alert(text);


}





// 저장

function saveRanking(){


    localStorage.setItem(

        "FishingKingRanking",

        JSON.stringify(ranking)

    );


}





// 불러오기

function loadRanking(){


    let data =

    localStorage.getItem(

        "FishingKingRanking"

    );



    if(data){


        ranking =

        JSON.parse(data);


    }


}



loadRanking();
