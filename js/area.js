// =========================
// 낚시왕 지역 시스템
// area.js
// =========================


let currentArea = 0;



const areaList = [


{
name:"🏞️ 초보 낚시터",
level:1,
background:"assets/map/lake.png",
fish:"초보 낚시터"
},


{
name:"🌿 강가",
level:5,
background:"assets/map/river.png",
fish:"강가"
},


{
name:"🏕️ 계곡",
level:10,
background:"assets/map/valley.png",
fish:"계곡"
},


{
name:"🌅 호수",
level:15,
background:"assets/map/lake2.png",
fish:"호수"
},


{
name:"🏝️ 해변",
level:20,
background:"assets/map/beach.png",
fish:"해변"
},


{
name:"🌊 깊은 바다",
level:30,
background:"assets/map/sea.png",
fish:"깊은 바다"
},


{
name:"🌑 심해",
level:40,
background:"assets/map/deepsea.png",
fish:"심해"
},


{
name:"❄️ 얼음 바다",
level:50,
background:"assets/map/ice.png",
fish:"얼음 바다"
},


{
name:"🌌 신비의 바다",
level:70,
background:"assets/map/mystic.png",
fish:"신비의 바다"
},


{
name:"👑 전설의 낚시터",
level:100,
background:"assets/map/legend.png",
fish:"전설의 낚시터"
}


];






// 현재 지역 가져오기

function getCurrentArea(){


return areaList[currentArea];


}








// 지역 이동

function moveArea(index){


if(!areaList[index])

return;



if(level < areaList[index].level){


alert(

"⭐ 레벨 "

+

areaList[index].level

+

" 이상 필요"

);


return;


}



currentArea=index;



changeBackground();



updateUI();



}








// 배경 변경

function changeBackground(){


let bg=

document.getElementById(

"background"

);



if(bg){


bg.src=

areaList[currentArea].background;


}


}







// 지역창

function showArea(){


let text="🌍 지역\n\n";



areaList.forEach(

(a,i)=>{


text +=

(i+1)

+

". "

+

a.name

+

" (Lv."

+

a.level

+

")\n";


}

);



alert(text);


}
