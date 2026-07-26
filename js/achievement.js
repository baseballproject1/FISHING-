// =========================
// 낚시왕 업적 시스템
// achievement.js
// =========================


let achievements = [


{
id:1,
name:"낚시 입문자",
condition:"fish",
target:10,
count:0,
rewardGold:5000,
complete:false
},


{
id:2,
name:"낚시 중독자",
condition:"fish",
target:100,
count:0,
rewardGold:50000,
complete:false
},


{
id:3,
name:"물고기 수집가",
condition:"book",
target:30,
count:0,
rewardGold:100000,
complete:false
},


{
id:4,
name:"희귀 물고기 사냥꾼",
condition:"rare",
target:10,
count:0,
rewardGold:200000,
complete:false
},


{
id:5,
name:"전설의 낚시꾼",
condition:"legend",
target:5,
count:0,
rewardGold:1000000,
complete:false
}


];







// 업적 체크

function checkAchievement(){


achievements.forEach(a=>{


if(a.complete)

return;




if(a.condition==="fish"){


a.count=caughtFish.length;


}




if(a.condition==="book"){


if(typeof aquariumFish!=="undefined")

a.count=aquariumFish.length;


}





if(a.condition==="rare"){


a.count = caughtFish.filter(

f=>f.grade==="희귀"

).length;


}




if(a.condition==="legend"){


a.count = caughtFish.filter(

f=>

f.grade==="전설"

||

f.grade==="신화"

).length;


}






if(a.count>=a.target){


completeAchievement(a);


}



});


}







// 업적 완료

function completeAchievement(a){


a.complete=true;



gold += a.rewardGold;



addLog(

"🏆 업적 달성 : "

+

a.name

);



alert(

"🏆 업적 달성!\n\n"

+

a.name

+

"\n💰 +"

+

a.rewardGold

+

"G"

);



updateUI();


}








// 업적 보기

function showAchievement(){


let text="🏆 업적\n\n";



achievements.forEach(a=>{


text +=

a.name

+

"\n"

+

a.count

+

"/"

+

a.target

+

" "

+

(a.complete?"✅":"❌")

+

"\n\n";


});



alert(text);


}
