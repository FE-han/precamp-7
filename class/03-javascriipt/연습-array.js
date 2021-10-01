const bbb = "7";
// undefined
console.log(bbb);
// VM125:1 7
// undefined
bbb;
("7");
const pizzas = "피자";
// undefined
pizzas;
// '피자'
const burger =
  // ["불고기","새우","치킨"]
  burger;
// (3) ['불고기', '새우', '치킨']
burger[0];
// '불고기'
burger[1];
// '새우'
burger[2];
// '치킨'
burger.length;
// 3
burger.includes("새우");
// true
burger.includes("피자");
// false
burger.push("콜라");
// 4
burger;
// (4) ['불고기', '새우', '치킨', '콜라']
burger.pop();
// '콜라'
burger;
// (3) ['불고기', '새우', '치킨']
burger.length;
// 3
