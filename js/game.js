// =========================
// 낚시왕 Pixel Game
// game.js
// =========================


let gold = 10000;

let level = 1;

let exp = 0;

let caughtFish = [];





// 낚시

function fish(){


    let areaData = getCurrentArea();



    let list = fishList.filter(

        f => f.area === areaData.name

    );



    if(list.length === 0){

        list = fishList;

    }



    let fish =

    list[

        Math.floor(

            Math.random()

            *

            list.length

        )

    ];





    // 무게

    let weight = Number(

        (

        Math.random()

        *

        (

        fish.max -

        fish.min

        )

        +

        fish.min

        )

        .toFixed(1)

    );






    let price =

    typeof calculateFishPrice === "function"

    ?

    calculateFishPrice(

        fish,

        weight

    )

    :

    Math.floor(

        weight *

        fish.price

    );






    let catchFish = {


        name:fish.name,


        grade:fish.grade,


        weight:weight,


        price:price,


        area:areaData.name


    };






    caughtFish.push(catchFish);



    gold += price;



    exp +=

    typeof calculateExp === "function"

    ?

    calculateExp(fish)

    :

    10;







    levelCheck();







    // 픽셀 연출

    showPixelFish(fish);






    // 시스템 연결


    if(typeof addAquarium === "function")

        addAquarium(catchFish);




    if(typeof recordContest === "function")

        recordContest(

            fish.name,

            weight

        );




    if(typeof updateRecord === "function")

        updateRecord(

            fish,

            weight,

            price

        );




    if(typeof checkMission === "function")

        checkMission();




    if(typeof checkAchievement === "function")

        checkAchievement();





    addLog(

        "🎣 "

        +

        fish.name

        +

        " "

        +

        weight

        +

        "kg 획득!"

    );





    saveSlot(1);


    updateUI();



}









// 픽셀 물고기 표시

function showPixelFish(fish){


    let img =

    document.getElementById(

        "fishImage"

    );



    if(!img)

        return;




    img.style.display="block";



    setTimeout(()=>{


        img.style.display="none";


    },2000);



}








// 레벨 체크

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


    }


}








// 기록창

function addLog(text){


    let log =

    document.getElementById(

        "log"

    );



    if(!log)

        return;



    log.innerHTML =

    text

    +

    "<br>"

    +

    log.innerHTML;


}








// UI 업데이트

function updateUI(){



    let g =

    document.getElementById(

        "gold"

    );



    let l =

    document.getElementById(

        "level"

    );



    let b =

    document.getElementById(

        "book"

    );



    if(g)

        g.innerText = gold;



    if(l)

        l.innerText = level;



    if(b && typeof aquariumFish !== "undefined")

        b.innerText = aquariumFish.length;



    if(typeof getCurrentArea==="function"){


        let a=

        document.getElementById(

            "area"

        );


        if(a)

            a.innerText=

            getCurrentArea().name;


    }


}






updateUI();
