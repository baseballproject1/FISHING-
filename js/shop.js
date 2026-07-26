// =========================
// 낚시왕 상점 시스템
// shop.js
// =========================


let shopItems = [

{
id:1,
name:"일반 미끼",
type:"bait",
price:1000,
power:1
},

{
id:2,
name:"고급 미끼",
type:"bait",
price:10000,
power:3
},

{
id:3,
name:"황금 미끼",
type:"bait",
price:50000,
power:5
},

{
id:4,
name:"튼튼한 낚싯대",
type:"rod",
price:100000,
power:10
},

{
id:5,
name:"전설의 낚싯대",
type:"rod",
price:1000000,
power:30
}

];




let ownedItems = [];





// 아이템 구매

function buyItem(id){


let item = shopItems.find(

i=>i.id===id

);



if(!item)

return;



if(gold < item.price){


alert("💰 골드가 부족합니다.");

return;


}



gold -= item.price;



ownedItems.push(item);



alert(

"🛒 구매 완료!\n"

+

item.name

);



updateUI();


}







// 상점 보기

function showShop(){


let text =

"🛒 상점\n\n";



shopItems.forEach(item=>{


text +=

item.id

+

". "

+

item.name

+

"\n"

+

"가격 : "

+

item.price

+

"G\n\n";


});



alert(text);


}








// 보유 아이템 보기

function showItems(){


let text =

"🎒 보유 아이템\n\n";



if(ownedItems.length===0){


text += "없음";


}

else{


ownedItems.forEach((item,i)=>{


text +=

(i+1)

+

". "

+

item.name

+

"\n";


});


}



alert(text);


}
