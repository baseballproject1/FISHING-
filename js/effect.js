// ========================
// 낚시왕 낚시 효과 시스템
// effect.js
// ========================



// 낚시 발견 효과

function fishEffect(fish){


    let message="";



    switch(fish.grade){


        case "일반":

            message =
            "🎣 물고기를 낚았습니다!";

        break;



        case "희귀":

            message =
            "✨ 희귀 물고기 발견!";

        break;



        case "전설":

            message =
            "👑 전설의 물고기가 나타났습니다!";

        break;



        case "신화":

            message =
            "🌌 신화급 물고기 발견!!";

        break;


        default:

            message =
            "🎣 낚시 성공!";

    }



    return message;


}





// 화면 효과

function showEffect(fish){


    let effect = fishEffect(fish);



    let result =

    document.getElementById("result");



    if(result){


        result.innerHTML =

        "<h2>"+

        effect+

        "</h2>";


    }



}





// 희귀도 확인

function isRareFish(fish){


    return (

        fish.grade==="희귀" ||

        fish.grade==="전설" ||

        fish.grade==="신화"

    );


}
