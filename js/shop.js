// ========================
// 낚시왕 상점 시스템
// shop.js
// ========================



const shopItems = [

    {
        name:"🪱 일반 미끼",
        price:500,
        item:"일반 미끼"
    },

    {
        name:"✨ 고급 미끼",
        price:3000,
        item:"고급 미끼"
    },

    {
        name:"🌟 황금 미끼",
        price:10000,
        item:"황금 미끼"
    },

    {
        name:"🍀 행운권",
        price:5000,
        item:"행운권"
    },

    {
        name:"💰 골드 상자",
        price:10000,
        item:"골드 상자"
    }

];




// 상점 열기

function showShop(){


    let text =
    "🏪 낚시왕 상점\n\n";


    text +=
    "💰 보유 골드 : "
    +
    gold
    +
    "G\n\n";


    shopItems.forEach((item,i)=>{


        text +=

        (i+1)
        +
        ". "
        +
        item.name
        +
        " : "
        +
        item.price
        +
        "G\n";


    });



    text +=
    "\n물고기 판매 버튼으로 판매 가능";


    alert(text);


}




// 아이템 구매

function buyItem(index){


    let item =
    shopItems[index];


    if(!item){

        return;

    }



    if(gold < item.price){


        alert(
        "골드가 부족합니다."
        );


        return;

    }



    gold -= item.price;


    addItem(
        item.item,
        1
    );


    alert(

    item.name+
    " 구매 완료!"

    );


    updateUI();


    saveGame();


}




// 물고기 판매

function sellFish(index){


    let fish =
    caughtFish[index];


    if(!fish){

        return;

    }



    gold += fish.price;



    caughtFish.splice(

        index,

        1

    );



    alert(

    fish.name+
    " 판매!\n"+
    fish.price+
    "G 획득"

    );


    updateUI();


    saveGame();


}





// 전체 물고기 판매

function sellAllFish(){


    let total = 0;



    caughtFish.forEach(f=>{


        total += f.price;


    });



    caughtFish = [];



    gold += total;



    alert(

    "🐟 물고기 전체 판매\n"+
    total+
    "G 획득"

    );



    updateUI();


    saveGame();


}
