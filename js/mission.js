// ========================
// 낚시왕 미션 시스템
// mission.js
// ========================


let missions = [

    {
        id:1,
        name:"🐟 물고기 10마리 잡기",
        target:10,
        reward:5000,
        complete:false
    },

    {
        id:2,
        name:"🎣 30마리 낚기",
        target:30,
        reward:15000,
        complete:false
    },

    {
        id:3,
        name:"⭐ 희귀 물고기 획득",
        target:"희귀",
        reward:20000,
        complete:false
    },

    {
        id:4,
        name:"👑 전설 물고기 획득",
        target:"전설",
        reward:100000,
        complete:false
    },

    {
        id:5,
        name:"🐠 도감 50종 완성",
        target:50,
        reward:50000,
        complete:false
    }

];




// 미션 확인

function checkMission(){


    missions.forEach(m=>{


        if(m.complete){

            return;

        }



        let clear=false;



        if(m.id===1){

            if(caughtFish.length>=10){

                clear=true;

            }

        }



        if(m.id===2){

            if(caughtFish.length>=30){

                clear=true;

            }

        }



        if(m.id===3){

            if(

            caughtFish.some(

            f=>f.grade==="희귀"

            )

            ){

                clear=true;

            }

        }



        if(m.id===4){

            if(

            caughtFish.some(

            f=>f.grade==="전설"

            )

            ){

                clear=true;

            }

        }



        if(m.id===5){

            if(

            aquariumFish.length>=50

            ){

                clear=true;

            }

        }



        if(clear){


            m.complete=true;


            gold += m.reward;



            alert(

            "📜 미션 완료!\n"+
            m.name+
            "\n"+
            m.reward+
            "G 획득"

            );


            updateUI();


            saveMission();

        }


    });


}




// 미션 보기

function showMission(){


    let text="📜 미션\n\n";


    missions.forEach(m=>{


        text +=

        m.name+
        " : "+
        (m.complete?"✅":"❌")
        +
        "\n";


    });



    alert(text);


}





// 저장

function saveMission(){


    localStorage.setItem(

        "FishingKingMission",

        JSON.stringify(missions)

    );


}





// 불러오기

function loadMission(){


    let data=

    localStorage.getItem(

        "FishingKingMission"

    );



    if(data){


        missions=

        JSON.parse(data);


    }


}


loadMission();
