// =========================
// 낚시왕 배 시스템
// boat.js
// =========================


let boatLevel = 0;



const boatList = [

{
name:"낡은 나무배",
level:0,
price:0,
speed:0,
image:"assets/boat/boat1.png"
},


{
name:"작은 낚싯배",
level:1,
price:10000,
speed:10,
image:"assets/boat/boat2.png"
},


{
name:"튼튼한 어선",
level:2,
price:50000,
speed:20,
image:"assets/boat/boat3.png"
},


{
name:"고급 낚시선",
level:3,
price:200000,
speed:35,
image:"assets/boat/boat4.png"
},


{
name:"해양 탐험선",
level:4,
price:500000,
speed:50,
image:"assets/boat/boat5.png"
},


{
name:"전설의 배",
level:5,
price:1000000,
speed:80,
image:"assets/boat/boat6.png"
}


];






// 배 구매 / 업그레이드

function upgradeBoat(){


let next = boatLevel + 1;



if(!boatList[next]){


alert("최고 레벨 배입니다.");

return;


}



let cost = boatList[next].price;



if(gold < cost){


alert("골드가 부족합니다.");

return;


}



gold -= cost;


boatLevel = next;



changeBoatImage();



updateUI();



alert(

"🚢 "

+

boatList[next].name

+

" 획득!"

);


}








// 배 이미지 변경

function changeBoatImage(){


let img =

document.getElementById(

"boat"

);



if(img){


img.src =

boatList[boatLevel].image;


}


}








// 현재 배 확인

function getBoat(){


return boatList[boatLevel];


}








// 배 메뉴

function showBoat(){


let boat = getBoat();



alert(

"🚢 현재 배\n\n"

+

boat.name

+

"\n속도 : "

+

boat.speed

);


}
