// =========================
// 낚시왕 미션 시스템
// mission.js
// =========================


let missions = [

{
id:1,
name:"첫 낚시 도전",
type:"fish",
target:1,
count:0,
rewardGold:1000,
rewardExp:50,
complete:false
},

{
id:2,
name:"물고기 10마리 잡기",
type:"fish",
target:10,
count:0,
rewardGold:5000,
rewardExp:200,
complete:false
},

{
id:3,
name:"희귀 물고기 발견",
type:"rare",
target:1,
count:0,
rewardGold:10000,
rewardExp:500,
complete:false
},

{
id:4,
name:"전설 물고기 잡기",
type:"legend",
target:1,
count:0,
rewardGold:50000,
rewardExp:1000,
complete:false
},

{
id:5,
name:"도감 20종 완성",
type:"book",
target:20,
count:0,
rewardGold:100000,
rewardExp:2000,
complete:false
}

];






// 미션 체크

function checkMission(){


missions.forEach(m=>{


if(m.complete)

return;



if(m.type==="fish"){


m.count++;


}



if(m.type==="rare"){


let last =

caughtFish[caughtFish.length-1];


if(last && last.grade==="희귀")

m.count++;


}



if(m.type==="legend"){


let last =

caughtFish[caughtFish.length-1];


if(last && 

(last.grade==="전설" || last.grade==="신화"))

m.count++;


}



if(m.type==="book"){


if(typeof aquariumFish!=="undefined")

m.count=aquariumFish.length;


}




if(m.count>=m.target){


completeMission(m);


}



});


}







// 미션 완료

function completeMission(m){


m.complete=true;



gold += m.rewardGold;


exp += m.rewardExp;



addLog(

"📜 미션 완료 : "

+

m.name

);



alert(

"🎉 미션 완료!\n\n"

+

m.name

+

"\n💰 "

+

m.rewardGold

+

"G\n⭐ "

+

m.rewardExp

+

" EXP"

);



updateUI();


}







// 미션 보기

function showMission(){


let text="📜 미션\n\n";



missions.forEach(m=>{


text +=

m.name

+

"\n"

+

m.count

+

"/"

+

m.target

+

" "

+

(m.complete?"✅":"❌")

+

"\n\n";


});



alert(text);


}
