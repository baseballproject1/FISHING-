// ========================
// 낚시왕 낚시 대회 시스템
// contest.js
// ========================


let contest = {

    join:false,

    bestFish:"",

    bestWeight:0,

    rewardGet:false

};




// AI 참가자

const contestPlayers = [

    {
        name:"초보 낚시꾼",
        weight:150
    },

    {
        name:"숙련 낚시꾼",
        weight:400
    },

    {
        name:"전문 낚시꾼",
        weight:800
    },

    {
        name:"전설 낚시꾼",
        weight:1500
    }

];




// 대회 참가

function joinContest(){


    if(contest.join){


        alert(
        "이미 참가 중입니다."
        );


        return;

    }



    contest.join=true;


    contest.bestFish="";


    contest.bestWeight=0;


    contest.rewardGet=false;



    alert(
    "🏆 낚시 대회 참가 완료!"
    );


    saveContest();


}




// 낚시 기록 등록

function recordContest(name,weight){


    if(!contest.join){

        return;

    }



    if(weight > contest.bestWeight){


        contest.bestWeight=weight;


        contest.bestFish=name;



        saveContest();


    }


}





// 순위 계산

function getContestRank(){


    let ranking=[


        {

            name:"나",

            weight:contest.bestWeight

        }

    ];



    contestPlayers.forEach(player=>{


        ranking.push({

            name:player.name,

            weight:player.weight

        });


    });



    ranking.sort(

        (a,b)=>b.weight-a.weight

    );



    return ranking;


}





// 결과 보기

function showContest(){


    if(!contest.join){


        alert(

        "먼저 대회에 참가하세요."

        );


        return;

    }



    let ranking=getContestRank();



    let text=

    "🏆 낚시 대회 결과\n\n";



    ranking.forEach((p,i)=>{


        text +=

        (i+1)

        +

        "위 "

        +

        p.name

        +

        " : "

        +

        p.weight.toFixed(1)

        +

        "kg\n";


    });



    let myRank =

    ranking.findIndex(

        p=>p.name==="나"

    )+1;



    let reward=10000;



    if(myRank===1){

        reward=500000;

    }

    else if(myRank===2){

        reward=200000;

    }

    else if(myRank===3){

        reward=100000;

    }



    if(!contest.rewardGet){


        gold+=reward;


        contest.rewardGet=true;



        alert(

        "🎁 대회 보상\n"

        +

        reward+

        "G 획득"

        );


        updateUI();


        saveGame();


    }



    alert(text);



    saveContest();


}





// 내 기록 보기

function showContestRecord(){


    alert(

    "🎣 최고 기록\n\n"

    +

    contest.bestFish

    +

    "\n"

    +

    contest.bestWeight

    +

    "kg"

    );


}





// 저장

function saveContest(){


    localStorage.setItem(

        "FishingKingContest",

        JSON.stringify(contest)

    );


}





// 불러오기

function loadContest(){


    let data=

    localStorage.getItem(

        "FishingKingContest"

    );



    if(data){


        contest=

        JSON.parse(data);


    }


}



loadContest();
