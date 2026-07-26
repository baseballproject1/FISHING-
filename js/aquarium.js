// =========================
// 낚시왕 수족관 / 도감 시스템
// aquarium.js
// =========================


let aquariumFish = [];




// 물고기 추가

function addAquarium(fish){


    let exist = aquariumFish.find(

        f => f.name === fish.name

    );


    if(!exist){


        aquariumFish.push({

            name:fish.name,

            grade:fish.grade,

            weight:fish.weight,

            count:1

        });


        addLog(

        "📖 새로운 물고기 발견 : "

        +

        fish.name

        );


    }

    else{


        exist.count++;


    }



    updateAquariumUI();


}







// 수족관 보기

function showAquarium(){


    let text =

    "🐠 수족관 도감\n\n";



    if(aquariumFish.length===0){


        text +=

        "아직 발견한 물고기가 없습니다.";


    }

    else{


        aquariumFish.forEach((f,i)=>{


            text +=

            (i+1)

            +

            ". "

            +

            f.name

            +

            " ["

            +

            f.grade

            +

            "] "

            +

            f.count

            +

            "마리\n";


        });


    }



    text +=

    "\n발견 : "

    +

    aquariumFish.length

    +

    "/120";



    alert(text);



}








// 도감 UI 업데이트

function updateAquariumUI(){


    let book =

    document.getElementById(

        "book"

    );



    if(book){


        book.innerText =

        aquariumFish.length;


    }


}
