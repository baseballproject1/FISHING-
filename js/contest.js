// =========================
// 낚시왕 낚시 대회 시스템
// contest.js
// =========================


let contest = {

    active:false,

    score:0,

    bestFish:null,

    reward:false

};




// 대회 시작

function startContest(){


    contest.active = true;

    contest.score = 0;

    contest.bestFish = null;

    contest.reward = false;


    alert(
        "🏅 낚시 대회 시작!\n\n가장 큰 물고기를 잡으세요!"
    );


}







// 대회 기록

function recordContest(name, weight){


    if(!contest.active)

    return;



    if(
        !contest.bestFish ||
        weight > contest.bestFish.weight
    ){


        contest.bestFish = {

            name:name,

            weight:weight

        };


        contest.score = Math.floor(weight * 100);


        addLog(
            "🏅 대회 최고 기록 갱신 : "
            +
            name
            +
            " "
            +
            weight
            +
            "kg"
        );


    }


}







// 대회 종료

function endContest(){


    if(!contest.active){


        alert("진행 중인 대회가 없습니다.");

        return;

    }



    contest.active=false;



    let reward = 0;



    if(contest.score >= 50000){


        reward = 1000000;


    }

    else if(contest.score >= 10000){


        reward = 300000;


    }

    else{


        reward = 50000;


    }





    gold += reward;


    contest.reward=true;



    alert(

        "🏆 대회 종료!\n\n"

        +

        "최고 기록 : "

        +

        (
        contest.bestFish
        ?
        contest.bestFish.name
        +
        " "
        +
        contest.bestFish.weight
        +
        "kg"
        :
        "없음"
        )

        +

        "\n💰 보상 : "

        +

        reward

        +

        "G"

    );



    updateUI();


}








// 대회 정보

function showContest(){


    let text =

    "🏅 낚시 대회\n\n";



    if(contest.active){


        text +=

        "진행 중\n";



    }

    else{


        text +=

        "대기 중\n";


    }




    if(contest.bestFish){


        text +=

        "\n최고 기록\n"

        +

        contest.bestFish.name

        +

        "\n"

        +

        contest.bestFish.weight

        +

        "kg";


    }



    alert(text);


}
