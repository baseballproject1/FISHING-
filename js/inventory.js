// =========================
// 낚시왕 보관함 시스템
// inventory.js
// =========================


let inventory = [];





// 물고기 추가

function addInventory(fish){


inventory.push(fish);



updateInventoryUI();


}








// 보관함 보기

function showInventory(){



let text = "🎒 보관함\n\n";



if(inventory.length === 0){


text += "보관된 물고기가 없습니다.";


}

else{


inventory.forEach((f,i)=>{


text +=

(i+1)

+

". "

+

f.name

+

" "

+

f.weight

+

"kg\n";


});


}



alert(text);



}








// 물고기 판매

function sellFish(index){



let fish = inventory[index];



if(!fish)

return;



gold += fish.price;



inventory.splice(index,1);



updateInventoryUI();



updateUI();



alert(

"💰 "

+

fish.name

+

" 판매!\n+"

+

fish.price

+

"G"

);



}








// 전체 판매

function sellAllFish(){



let total = 0;



inventory.forEach(f=>{


total += f.price;


});



gold += total;



inventory = [];



updateInventoryUI();



updateUI();



alert(

"💰 전체 판매 완료!\n+"

+

total

+

"G"

);



}








// 보관함 UI

function updateInventoryUI(){



let count =

document.getElementById(

"itemCount"

);



if(count){


count.innerText = inventory.length;


}



}
