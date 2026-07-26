// =========================
// 낚시왕 밸런스 시스템
// balance.js
// =========================



const balance = {


// 물고기 등급 배율

gradePrice : {


"일반":1,

"희귀":3,

"전설":10,

"신화":30


},




// 낚시 성공 확률

catchRate : {


normal:80,

rare:15,

legend:4,

myth:1


},




// 경험치 설정

exp : {


normal:10,

rare:50,

legend:200,

myth:500


},




// 레벨업 필요 경험치

levelNeed : 100



};









// 물고기 가격 계산

function calculateFishPrice(fish){


let rate =

balance.gradePrice[fish.grade]

||

1;



return Math.floor(

fish.price * rate

);



}








// 물고기 경험치 계산

function getFishExp(fish){


return (

balance.exp[fish.grade]

||

10

);


}








// 낚시 성공 판정

function fishingChance(grade){


let chance =

balance.catchRate[grade]

||

balance.catchRate.normal;



return Math.random()*100 < chance;


}








// 레벨 필요 경험치

function getNeedExp(){


return (

level *

balance.levelNeed

);


}
