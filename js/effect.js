// =========================
// 낚시왕 픽셀 효과 시스템
// effect.js
// =========================



// 낚시 시작 효과

function fishingEffect(){


let effect =

document.getElementById(

"effect"

);



if(!effect)

return;



effect.innerHTML =

"🎣";



effect.classList.add(

"shake"

);



setTimeout(()=>{


effect.classList.remove(

"shake"

);


effect.innerHTML="";


},1000);



}








// 물고기 등장 효과

function fishAppearEffect(fish){


let img =

document.getElementById(

"fishImage"

);



if(!img)

return;



img.src = fish.image;



img.style.display="block";



img.classList.add(

"fish-pop"

);





setTimeout(()=>{


img.classList.remove(

"fish-pop"

);



},1000);



}








// 성공 메시지

function catchEffect(fish,weight){


let box =

document.getElementById(

"message"

);



if(!box)

return;



box.innerHTML =


"🎉 낚시 성공!<br>"

+

fish.name

+

"<br>"

+

weight

+

"kg";



box.classList.add(

"show"

);





setTimeout(()=>{


box.classList.remove(

"show"

);


},2000);



}








// 실패 효과

function failEffect(){



let box =

document.getElementById(

"message"

);



if(box){


box.innerHTML =

"😢 물고기가 도망갔습니다.";



box.classList.add(

"show"

);



setTimeout(()=>{


box.classList.remove(

"show"

);


},1500);



}



}








// 화면 흔들림

function screenShake(){



document.body.classList.add(

"shake"

);



setTimeout(()=>{


document.body.classList.remove(

"shake"

);


},500);



}
