// ========================
// 낚시왕 지역 시스템
// area.js
// ========================


const areas = [

    {
        id:0,
        name:"🏞️ 초보 낚시터",
        level:1,
        boat:0,
        open:true
    },

    {
        id:1,
        name:"🌿 강가",
        level:3,
        boat:0,
        open:false
    },

    {
        id:2,
        name:"🏕️ 계곡",
        level:8,
        boat:0,
        open:false
    },

    {
        id:3,
        name:"🌅 호수",
        level:12,
        boat:0,
        open:false
    },

    {
        id:4,
        name:"🏝️ 해변",
        level:18,
        boat:0,
        open:false
    },

    {
        id:5,
        name:"🌊 깊은 바다",
        level:25,
        boat:1,
        open:false
    },

    {
        id:6,
        name:"🌑 심해",
        level:35,
        boat:2,
        open:false
    },

    {
        id:7,
        name:"❄️ 얼음 바다",
        level:45,
        boat:3,
        open:false
    },

    {
        id:8,
        name:"🌌 신비의 바다",
        level:60,
        boat:3,
        open:false
    },

    {
        id:9,
        name:"👑 전설의 낚시터",
        level:80,
        boat:4,
        open:false
    }

];



let currentArea = 0;




// 지역 이동

function changeArea(id){


    let area = areas[id];


    if(!area){

        return;

    }



    if(level < area.level){


        alert(

        "필요 레벨 : Lv."

        +

        area.level

        );


        return;

    }



    if(boatLevel < area.boat){


        alert(

        "더 좋은 배가 필요합니다."

        );


        return;

    }



    currentArea=id;



    alert(

    area.name+

    " 입장!"

    );


    saveArea();


    updateUI();


}




// 지역 목록 보기

function showArea(){


    let text=

    "🌍 지역 목록\n\n";



    areas.forEach(a=>{


        text +=

        a.name+

        "\n필요 Lv."

        +

        a.level;



        if(currentArea===a.id){

            text += " ⭐현재";

        }


        text += "\n\n";


    });



    alert(text);


}





// 현재 지역

function getCurrentArea(){


    return areas[currentArea];


}





// 해금 체크

function checkArea(){


    areas.forEach(a=>{


        if(level>=a.level){


            a.open=true;


        }


    });


    saveArea();


}





// 저장

function saveArea(){


    localStorage.setItem(

        "FishingKingArea",

        JSON.stringify({

            currentArea:currentArea

        })

    );


}





// 불러오기

function loadArea(){


    let data=

    localStorage.getItem(

        "FishingKingArea"

    );



    if(data){


        data=JSON.parse(data);


        currentArea=

        data.currentArea || 0;


    }


}



loadArea();
