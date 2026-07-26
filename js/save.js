// =========================
// 낚시왕 3슬롯 저장 시스템
// save.js
// =========================



const SAVE_KEY = "FishingKingSlot";





// 현재 게임 데이터 가져오기

function getSaveData(){


    return {


        gold: typeof gold !== "undefined" ? gold : 10000,


        level: typeof level !== "undefined" ? level : 1,


        exp: typeof exp !== "undefined" ? exp : 0,


        caughtFish:

        typeof caughtFish !== "undefined"

        ? caughtFish

        : [],



        currentArea:

        typeof currentArea !== "undefined"

        ? currentArea

        : 0,



        boatLevel:

        typeof boatLevel !== "undefined"

        ? boatLevel

        : 0,



        aquariumFish:

        typeof aquariumFish !== "undefined"

        ? aquariumFish

        : [],



        inventory:

        typeof inventory !== "undefined"

        ? inventory

        : {},



        missions:

        typeof missions !== "undefined"

        ? missions

        : [],



        achievements:

        typeof achievements !== "undefined"

        ? achievements

        : [],



        contest:

        typeof contest !== "undefined"

        ? contest

        : {},



        ranking:

        typeof ranking !== "undefined"

        ? ranking

        : {}

    };


}








// 저장

function saveSlot(slot){


    let data = getSaveData();



    localStorage.setItem(

        SAVE_KEY + slot,

        JSON.stringify(data)

    );



    alert(

    "💾 저장 "

    +

    slot

    +

    " 완료!"

    );


}







// 불러오기

function loadSlot(slot){


    let data =

    localStorage.getItem(

        SAVE_KEY + slot

    );



    if(!data){


        alert(

        "저장 데이터가 없습니다."

        );


        return;


    }



    data = JSON.parse(data);





    gold = data.gold;


    level = data.level;


    exp = data.exp;


    caughtFish = data.caughtFish;



    if(typeof currentArea !== "undefined")

        currentArea = data.currentArea;



    if(typeof boatLevel !== "undefined")

        boatLevel = data.boatLevel;



    if(typeof aquariumFish !== "undefined")

        aquariumFish = data.aquariumFish;



    if(typeof inventory !== "undefined")

        inventory = data.inventory;



    if(typeof missions !== "undefined")

        missions = data.missions;



    if(typeof achievements !== "undefined")

        achievements = data.achievements;



    if(typeof contest !== "undefined")

        contest = data.contest;



    if(typeof ranking !== "undefined")

        ranking = data.ranking;





    if(typeof updateUI === "function")

        updateUI();



    alert(

    "📂 저장 "

    +

    slot

    +

    " 불러오기 완료!"

    );


}








// 삭제

function deleteSlot(slot){



    if(confirm(

        "저장 "

        +

        slot

        +

        "을 삭제할까요?"

    )){


        localStorage.removeItem(

            SAVE_KEY + slot

        );



        alert(

        "🗑 저장 "

        +

        slot

        +

        " 삭제 완료"

        );


    }


}








// 자동 저장

function autoSave(){


    saveSlot(1);


}
