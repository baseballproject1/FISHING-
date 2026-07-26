// ========================
// 낚시왕 수족관 시스템
// aquarium.js
// ========================


let aquariumFish = [];



let aquariumRewards = [

    {
        count:20,
        reward:5000,
        complete:false
    },

    {
        count:50,
        reward:20000,
        complete:false
    },

    {
        count:100,
        reward:100000,
        complete:false
    },

    {
        count:120,
        reward:500000,
        complete:false
    }

];





// 물고기 등록

function addAquarium(fish){


    let exist = aquariumFish.find(

        f=>f.name===fish.name

    );


    if(!exist){


        aquariumFish.push({

            name:fish.name,

            grade:fish.grade

        });


    }



    checkAquariumReward();


    saveAquarium();


}





// 등급별 확인

function getAquariumGrade(grade){


    return aquariumFish.filter(

        f=>f.grade===grade

    ).length;


}





// 보상 확인

function checkAquariumReward(){


    aquariumRewards.forEach(r=>{


        if(r.complete){

            return;

        }



        if(aquariumFish.length>=r.count){


            r.complete=true;


            gold+=r.reward;



            alert(

            "🐠 수족관 보상!\n"

            +

            r.reward+

            "G 획득"

            );



            updateUI();


        }


    });


}





// 수족관 보기

function showAquarium(){


    let text=

    "🐠 수족관\n\n";



    text +=

    "등록 : "

    +

    aquariumFish.length

    +

    "/120\n\n";



    text +=

    "일반 : "

    +

    getAquariumGrade("일반")

    +

    "\n";



    text +=

    "희귀 : "

    +

    getAquariumGrade("희귀")

    +

    "\n";



    text +=

    "전설 : "

    +

    getAquariumGrade("전설")

    +

    "\n";



    text +=

    "신화 : "

    +

    getAquariumGrade("신화");



    alert(text);


}





// 저장

function saveAquarium(){


    localStorage.setItem(

        "FishingKingAquarium",

        JSON.stringify({

            fish:aquariumFish,

            reward:aquariumRewards

        })

    );


}





// 불러오기

function loadAquarium(){


    let data=

    localStorage.getItem(

        "FishingKingAquarium"

    );



    if(data){


        data=JSON.parse(data);



        aquariumFish=

        data.fish || [];



        aquariumRewards=

        data.reward || aquariumRewards;


    }


}



loadAquarium();
