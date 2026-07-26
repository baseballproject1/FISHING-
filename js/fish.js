// =========================
// 낚시왕 물고기 데이터
// fish.js
// 총 120종
// 1/4 (1~30)
// =========================


const fishList = [


// 🏞️ 초보 낚시터 (1~12)

{
name:"붕어",
grade:"일반",
area:"🏞️ 초보 낚시터",
min:0.5,
max:2,
price:100,
image:"assets/fish/fish001.png"
},

{
name:"피라미",
grade:"일반",
area:"🏞️ 초보 낚시터",
min:0.1,
max:1,
price:50,
image:"assets/fish/fish002.png"
},

{
name:"미꾸라지",
grade:"일반",
area:"🏞️ 초보 낚시터",
min:0.2,
max:1.5,
price:80,
image:"assets/fish/fish003.png"
},

{
name:"버들치",
grade:"일반",
area:"🏞️ 초보 낚시터",
min:0.3,
max:2,
price:120,
image:"assets/fish/fish004.png"
},

{
name:"납자루",
grade:"일반",
area:"🏞️ 초보 낚시터",
min:0.2,
max:1,
price:90,
image:"assets/fish/fish005.png"
},

{
name:"송사리",
grade:"일반",
area:"🏞️ 초보 낚시터",
min:0.1,
max:0.5,
price:60,
image:"assets/fish/fish006.png"
},

{
name:"메기",
grade:"희귀",
area:"🏞️ 초보 낚시터",
min:2,
max:6,
price:500,
image:"assets/fish/fish007.png"
},

{
name:"잉어",
grade:"희귀",
area:"🏞️ 초보 낚시터",
min:3,
max:10,
price:800,
image:"assets/fish/fish008.png"
},

{
name:"큰 붕어",
grade:"희귀",
area:"🏞️ 초보 낚시터",
min:5,
max:12,
price:1200,
image:"assets/fish/fish009.png"
},

{
name:"황금 붕어",
grade:"전설",
area:"🏞️ 초보 낚시터",
min:10,
max:20,
price:5000,
image:"assets/fish/fish010.png"
},

{
name:"고대 잉어",
grade:"전설",
area:"🏞️ 초보 낚시터",
min:15,
max:30,
price:10000,
image:"assets/fish/fish011.png"
},

{
name:"빛나는 물고기",
grade:"신화",
area:"🏞️ 초보 낚시터",
min:20,
max:40,
price:30000,
image:"assets/fish/fish012.png"
},



// 🌿 강가 (13~24)

{
name:"강준치",
grade:"일반",
area:"🌿 강가",
min:1,
max:4,
price:200,
image:"assets/fish/fish013.png"
},

{
name:"피라미 떼",
grade:"일반",
area:"🌿 강가",
min:0.5,
max:2,
price:150,
image:"assets/fish/fish014.png"
},

{
name:"은어",
grade:"일반",
area:"🌿 강가",
min:1,
max:3,
price:250,
image:"assets/fish/fish015.png"
},

{
name:"가물치",
grade:"희귀",
area:"🌿 강가",
min:5,
max:15,
price:1500,
image:"assets/fish/fish016.png"
},

{
name:"쏘가리",
grade:"희귀",
area:"🌿 강가",
min:3,
max:8,
price:1200,
image:"assets/fish/fish017.png"
},

{
name:"장어",
grade:"희귀",
area:"🌿 강가",
min:4,
max:12,
price:2000,
image:"assets/fish/fish018.png"
},

{
name:"대왕 메기",
grade:"전설",
area:"🌿 강가",
min:20,
max:50,
price:15000,
image:"assets/fish/fish019.png"
},

{
name:"황금 가물치",
grade:"전설",
area:"🌿 강가",
min:30,
max:70,
price:30000,
image:"assets/fish/fish020.png"
},

{
name:"강의 수호어",
grade:"신화",
area:"🌿 강가",
min:50,
max:100,
price:100000,
image:"assets/fish/fish021.png"
},

{
name:"푸른 용어",
grade:"신화",
area:"🌿 강가",
min:80,
max:150,
price:200000,
image:"assets/fish/fish022.png"
},

{
name:"거대 은어",
grade:"희귀",
area:"🌿 강가",
min:5,
max:15,
price:3000,
image:"assets/fish/fish023.png"
},

{
name:"무지개 송어",
grade:"전설",
area:"🌿 강가",
min:15,
max:40,
price:20000,
image:"assets/fish/fish024.png"
},



// 🏕️ 계곡 (25~30)

{
name:"산천어",
grade:"일반",
area:"🏕️ 계곡",
min:1,
max:3,
price:300,
image:"assets/fish/fish025.png"
},

{
name:"계곡 송사리",
grade:"일반",
area:"🏕️ 계곡",
min:0.5,
max:2,
price:200,
image:"assets/fish/fish026.png"
},

{
name:"계곡 피라미",
grade:"일반",
area:"🏕️ 계곡",
min:1,
max:4,
price:400,
image:"assets/fish/fish027.png"
},

{
name:"돌고기",
grade:"희귀",
area:"🏕️ 계곡",
min:3,
max:8,
price:1500,
image:"assets/fish/fish028.png"
},

{
name:"산골 메기",
grade:"희귀",
area:"🏕️ 계곡",
min:5,
max:12,
price:2500,
image:"assets/fish/fish029.png"
},

{
name:"계곡의 왕",
grade:"전설",
area:"🏕️ 계곡",
min:20,
max:60,
price:30000,
image:"assets/fish/fish030.png"
}
// =========================
// fish.js
// 2/4 (31~60)
// =========================


// 🌅 호수 (31~42)

{
name:"빙어",
grade:"일반",
area:"🌅 호수",
min:0.2,
max:1,
price:200,
image:"assets/fish/fish031.png"
},

{
name:"호수 붕어",
grade:"일반",
area:"🌅 호수",
min:1,
max:5,
price:500,
image:"assets/fish/fish032.png"
},

{
name:"블루길",
grade:"일반",
area:"🌅 호수",
min:0.5,
max:3,
price:300,
image:"assets/fish/fish033.png"
},

{
name:"배스",
grade:"희귀",
area:"🌅 호수",
min:3,
max:10,
price:1500,
image:"assets/fish/fish034.png"
},

{
name:"대형 잉어",
grade:"희귀",
area:"🌅 호수",
min:10,
max:25,
price:4000,
image:"assets/fish/fish035.png"
},

{
name:"호수 송어",
grade:"희귀",
area:"🌅 호수",
min:5,
max:15,
price:3000,
image:"assets/fish/fish036.png"
},

{
name:"황금 잉어",
grade:"전설",
area:"🌅 호수",
min:30,
max:70,
price:50000,
image:"assets/fish/fish037.png"
},

{
name:"호수의 수호자",
grade:"전설",
area:"🌅 호수",
min:50,
max:100,
price:100000,
image:"assets/fish/fish038.png"
},

{
name:"달빛 물고기",
grade:"신화",
area:"🌅 호수",
min:80,
max:150,
price:300000,
image:"assets/fish/fish039.png"
},

{
name:"별빛 잉어",
grade:"신화",
area:"🌅 호수",
min:100,
max:200,
price:500000,
image:"assets/fish/fish040.png"
},

{
name:"검은 배스",
grade:"희귀",
area:"🌅 호수",
min:8,
max:20,
price:5000,
image:"assets/fish/fish041.png"
},

{
name:"고대 호수어",
grade:"전설",
area:"🌅 호수",
min:70,
max:130,
price:150000,
image:"assets/fish/fish042.png"
},




// 🏝️ 해변 (43~54)

{
name:"멸치",
grade:"일반",
area:"🏝️ 해변",
min:0.1,
max:1,
price:100,
image:"assets/fish/fish043.png"
},

{
name:"고등어",
grade:"일반",
area:"🏝️ 해변",
min:1,
max:5,
price:500,
image:"assets/fish/fish044.png"
},

{
name:"전갱이",
grade:"일반",
area:"🏝️ 해변",
min:1,
max:4,
price:400,
image:"assets/fish/fish045.png"
},

{
name:"광어",
grade:"희귀",
area:"🏝️ 해변",
min:5,
max:20,
price:3000,
image:"assets/fish/fish046.png"
},

{
name:"도다리",
grade:"희귀",
area:"🏝️ 해변",
min:3,
max:12,
price:2500,
image:"assets/fish/fish047.png"
},

{
name:"농어",
grade:"희귀",
area:"🏝️ 해변",
min:10,
max:30,
price:5000,
image:"assets/fish/fish048.png"
},

{
name:"황금 광어",
grade:"전설",
area:"🏝️ 해변",
min:30,
max:80,
price:70000,
image:"assets/fish/fish049.png"
},

{
name:"바다의 왕",
grade:"전설",
area:"🏝️ 해변",
min:80,
max:150,
price:150000,
image:"assets/fish/fish050.png"
},

{
name:"심해로 향하는 물고기",
grade:"신화",
area:"🏝️ 해변",
min:100,
max:250,
price:400000,
image:"assets/fish/fish051.png"
},

{
name:"무지개 해어",
grade:"신화",
area:"🏝️ 해변",
min:150,
max:300,
price:700000,
image:"assets/fish/fish052.png"
},

{
name:"대왕 농어",
grade:"전설",
area:"🏝️ 해변",
min:50,
max:120,
price:100000,
image:"assets/fish/fish053.png"
},

{
name:"황금 도다리",
grade:"희귀",
area:"🏝️ 해변",
min:10,
max:25,
price:8000,
image:"assets/fish/fish054.png"
},




// 🌊 깊은 바다 (55~60)

{
name:"참치",
grade:"희귀",
area:"🌊 깊은 바다",
min:30,
max:100,
price:15000,
image:"assets/fish/fish055.png"
},

{
name:"다랑어",
grade:"희귀",
area:"🌊 깊은 바다",
min:20,
max:80,
price:10000,
image:"assets/fish/fish056.png"
},

{
name:"청새치",
grade:"전설",
area:"🌊 깊은 바다",
min:100,
max:300,
price:100000,
image:"assets/fish/fish057.png"
},

{
name:"대왕 오징어",
grade:"전설",
area:"🌊 깊은 바다",
min:80,
max:200,
price:120000,
image:"assets/fish/fish058.png"
},

{
name:"바다 드래곤",
grade:"신화",
area:"🌊 깊은 바다",
min:200,
max:500,
price:500000,
image:"assets/fish/fish059.png"
},

{
name:"황금 청새치",
grade:"신화",
area:"🌊 깊은 바다",
min:300,
max:700,
price:1000000,
image:"assets/fish/fish060.png"
},// =========================
// fish.js
// 3/4 (61~90)
// =========================



// 🌑 심해 (61~72)

{
name:"심해 아귀",
grade:"일반",
area:"🌑 심해",
min:5,
max:20,
price:3000,
image:"assets/fish/fish061.png"
},

{
name:"랜턴피쉬",
grade:"일반",
area:"🌑 심해",
min:1,
max:5,
price:2000,
image:"assets/fish/fish062.png"
},

{
name:"심해 장어",
grade:"희귀",
area:"🌑 심해",
min:10,
max:40,
price:10000,
image:"assets/fish/fish063.png"
},

{
name:"거대 오징어",
grade:"희귀",
area:"🌑 심해",
min:50,
max:150,
price:30000,
image:"assets/fish/fish064.png"
},

{
name:"블랙 상어",
grade:"희귀",
area:"🌑 심해",
min:80,
max:200,
price:50000,
image:"assets/fish/fish065.png"
},

{
name:"심해 가오리",
grade:"희귀",
area:"🌑 심해",
min:40,
max:120,
price:25000,
image:"assets/fish/fish066.png"
},

{
name:"심해의 포식자",
grade:"전설",
area:"🌑 심해",
min:200,
max:500,
price:200000,
image:"assets/fish/fish067.png"
},

{
name:"검은 용상어",
grade:"전설",
area:"🌑 심해",
min:300,
max:700,
price:500000,
image:"assets/fish/fish068.png"
},

{
name:"심해 수호룡",
grade:"신화",
area:"🌑 심해",
min:500,
max:1000,
price:2000000,
image:"assets/fish/fish069.png"
},

{
name:"어둠의 물고기",
grade:"신화",
area:"🌑 심해",
min:700,
max:1500,
price:5000000,
image:"assets/fish/fish070.png"
},

{
name:"고대 심해어",
grade:"전설",
area:"🌑 심해",
min:250,
max:600,
price:300000,
image:"assets/fish/fish071.png"
},

{
name:"심해 보석어",
grade:"신화",
area:"🌑 심해",
min:400,
max:900,
price:1000000,
image:"assets/fish/fish072.png"
},




// ❄️ 얼음 바다 (73~84)

{
name:"빙어",
grade:"일반",
area:"❄️ 얼음 바다",
min:0.5,
max:2,
price:500,
image:"assets/fish/fish073.png"
},

{
name:"북극 대구",
grade:"일반",
area:"❄️ 얼음 바다",
min:2,
max:8,
price:2000,
image:"assets/fish/fish074.png"
},

{
name:"얼음 송어",
grade:"희귀",
area:"❄️ 얼음 바다",
min:5,
max:20,
price:8000,
image:"assets/fish/fish075.png"
},

{
name:"설원 연어",
grade:"희귀",
area:"❄️ 얼음 바다",
min:10,
max:30,
price:15000,
image:"assets/fish/fish076.png"
},

{
name:"빙결 상어",
grade:"희귀",
area:"❄️ 얼음 바다",
min:50,
max:150,
price:60000,
image:"assets/fish/fish077.png"
},

{
name:"얼음 가오리",
grade:"희귀",
area:"❄️ 얼음 바다",
min:40,
max:100,
price:40000,
image:"assets/fish/fish078.png"
},

{
name:"얼음 바다의 왕",
grade:"전설",
area:"❄️ 얼음 바다",
min:200,
max:500,
price:300000,
image:"assets/fish/fish079.png"
},

{
name:"프로즌 드래곤피쉬",
grade:"전설",
area:"❄️ 얼음 바다",
min:300,
max:700,
price:700000,
image:"assets/fish/fish080.png"
},

{
name:"빙하의 수호자",
grade:"신화",
area:"❄️ 얼음 바다",
min:500,
max:1000,
price:3000000,
image:"assets/fish/fish081.png"
},

{
name:"얼음 용왕",
grade:"신화",
area:"❄️ 얼음 바다",
min:800,
max:1500,
price:7000000,
image:"assets/fish/fish082.png"
},

{
name:"눈꽃 물고기",
grade:"전설",
area:"❄️ 얼음 바다",
min:150,
max:400,
price:200000,
image:"assets/fish/fish083.png"
},

{
name:"빙설 보석어",
grade:"신화",
area:"❄️ 얼음 바다",
min:600,
max:1200,
price:5000000,
image:"assets/fish/fish084.png"
},




// 🌌 신비의 바다 (85~90)

{
name:"별빛 물고기",
grade:"일반",
area:"🌌 신비의 바다",
min:5,
max:20,
price:5000,
image:"assets/fish/fish085.png"
},

{
name:"은하 해파리",
grade:"희귀",
area:"🌌 신비의 바다",
min:10,
max:40,
price:20000,
image:"assets/fish/fish086.png"
},

{
name:"오로라 물고기",
grade:"희귀",
area:"🌌 신비의 바다",
min:20,
max:60,
price:50000,
image:"assets/fish/fish087.png"
},

{
name:"우주 참치",
grade:"전설",
area:"🌌 신비의 바다",
min:100,
max:300,
price:300000,
image:"assets/fish/fish088.png"
},

{
name:"은하의 수호어",
grade:"전설",
area:"🌌 신비의 바다",
min:300,
max:800,
price:1000000,
image:"assets/fish/fish089.png"
},

{
name:"우주 용어",
grade:"신화",
area:"🌌 신비의 바다",
min:800,
max:2000,
price:10000000,
image:"assets/fish/fish090.png"
},// =========================
// fish.js
// 4/4 (91~120)
// =========================



// 👑 전설의 낚시터 (91~102)

{
name:"황금 잉어왕",
grade:"일반",
area:"👑 전설의 낚시터",
min:10,
max:30,
price:10000,
image:"assets/fish/fish091.png"
},

{
name:"왕붕어",
grade:"일반",
area:"👑 전설의 낚시터",
min:20,
max:50,
price:20000,
image:"assets/fish/fish092.png"
},

{
name:"고대 물고기",
grade:"희귀",
area:"👑 전설의 낚시터",
min:50,
max:150,
price:80000,
image:"assets/fish/fish093.png"
},

{
name:"전설 송어",
grade:"희귀",
area:"👑 전설의 낚시터",
min:80,
max:200,
price:150000,
image:"assets/fish/fish094.png"
},

{
name:"황금 가오리",
grade:"희귀",
area:"👑 전설의 낚시터",
min:100,
max:300,
price:200000,
image:"assets/fish/fish095.png"
},

{
name:"전설의 상어",
grade:"전설",
area:"👑 전설의 낚시터",
min:300,
max:800,
price:1000000,
image:"assets/fish/fish096.png"
},

{
name:"고대 바다왕",
grade:"전설",
area:"👑 전설의 낚시터",
min:500,
max:1200,
price:3000000,
image:"assets/fish/fish097.png"
},

{
name:"황금 드래곤피쉬",
grade:"전설",
area:"👑 전설의 낚시터",
min:700,
max:1500,
price:5000000,
image:"assets/fish/fish098.png"
},

{
name:"천상의 물고기",
grade:"신화",
area:"👑 전설의 낚시터",
min:1000,
max:2500,
price:20000000,
image:"assets/fish/fish099.png"
},

{
name:"바다의 신",
grade:"신화",
area:"👑 전설의 낚시터",
min:1500,
max:3000,
price:50000000,
image:"assets/fish/fish100.png"
},

{
name:"무한의 물고기",
grade:"신화",
area:"👑 전설의 낚시터",
min:2000,
max:5000,
price:100000000,
image:"assets/fish/fish101.png"
},

{
name:"낚시왕의 보물",
grade:"신화",
area:"👑 전설의 낚시터",
min:3000,
max:7000,
price:200000000,
image:"assets/fish/fish102.png"
},





// 추가 특수 물고기 (103~120)

{
name:"붉은 지느러미",
grade:"일반",
area:"🌊 깊은 바다",
min:5,
max:20,
price:3000,
image:"assets/fish/fish103.png"
},

{
name:"푸른 산호어",
grade:"일반",
area:"🌌 신비의 바다",
min:10,
max:30,
price:5000,
image:"assets/fish/fish104.png"
},

{
name:"황금 해마",
grade:"희귀",
area:"🏝️ 해변",
min:5,
max:15,
price:10000,
image:"assets/fish/fish105.png"
},

{
name:"달빛 해파리",
grade:"희귀",
area:"🌌 신비의 바다",
min:20,
max:80,
price:50000,
image:"assets/fish/fish106.png"
},

{
name:"검은 진주어",
grade:"전설",
area:"🌑 심해",
min:200,
max:500,
price:1000000,
image:"assets/fish/fish107.png"
},

{
name:"황제 참치",
grade:"전설",
area:"🌊 깊은 바다",
min:300,
max:900,
price:2000000,
image:"assets/fish/fish108.png"
},

{
name:"얼음 왕어",
grade:"전설",
area:"❄️ 얼음 바다",
min:400,
max:900,
price:3000000,
image:"assets/fish/fish109.png"
},

{
name:"별의 고래",
grade:"신화",
area:"🌌 신비의 바다",
min:2000,
max:5000,
price:50000000,
image:"assets/fish/fish110.png"
},

{
name:"태양 물고기",
grade:"신화",
area:"👑 전설의 낚시터",
min:3000,
max:6000,
price:80000000,
image:"assets/fish/fish111.png"
},

{
name:"달의 용",
grade:"신화",
area:"🌑 심해",
min:2500,
max:5500,
price:70000000,
image:"assets/fish/fish112.png"
},

{
name:"고대 바다 생명체",
grade:"신화",
area:"🌊 깊은 바다",
min:4000,
max:8000,
price:100000000,
image:"assets/fish/fish113.png"
},

{
name:"무지개 용어",
grade:"신화",
area:"🌌 신비의 바다",
min:5000,
max:9000,
price:150000000,
image:"assets/fish/fish114.png"
},

{
name:"전설의 황금어",
grade:"신화",
area:"👑 전설의 낚시터",
min:6000,
max:10000,
price:200000000,
image:"assets/fish/fish115.png"
},

{
name:"심해 황제",
grade:"신화",
area:"🌑 심해",
min:5000,
max:9000,
price:250000000,
image:"assets/fish/fish116.png"
},

{
name:"빙하의 용",
grade:"신화",
area:"❄️ 얼음 바다",
min:6000,
max:10000,
price:300000000,
image:"assets/fish/fish117.png"
},

{
name:"바다의 전설",
grade:"신화",
area:"👑 전설의 낚시터",
min:7000,
max:12000,
price:400000000,
image:"assets/fish/fish118.png"
},

{
name:"창조의 물고기",
grade:"신화",
area:"🌌 신비의 바다",
min:8000,
max:15000,
price:500000000,
image:"assets/fish/fish119.png"
},

{
name:"낚시왕 최후의 물고기",
grade:"신화",
area:"👑 전설의 낚시터",
min:10000,
max:20000,
price:1000000000,
image:"assets/fish/fish120.png"
}


];




// 물고기 이미지 변경

function changeFishImage(fish){


let img=document.getElementById("fishImage");


if(img){

img.src=fish.image;

}


  }
