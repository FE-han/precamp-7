for(let i=0; i<5; i=i+1){
    console.log("hello")
}
5VM1275:2 hello
undefined
for(let j=0; j<5; j=j+1){
    console.log("kk")
}
5VM1373:2 kk
undefined
const classmates = ["철수", "영희", "훈이"]

for(let j =0; j<3; j=j+1){
    console.log(classmates)[j]+"어린이")
}
VM1578:4 Uncaught SyntaxError: Unexpected token ')'
const classmates = ["철수", "영희", "훈이"]

for(let j =0; j<3; j=j+1){
    console.log(classmates[j]+"어린이")
}
VM1597:4 철수어린이
VM1597:4 영희어린이
VM1597:4 훈이어린이
undefined
const profiles = [
    { name: "철수", age:8},
    { name: "영희", age:10},
    { name: "훈이", age:12}
]
undefined
profiles[1].age
10
const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]
undefined
fruits[2].title
'산청딸기'
fruits[2].number
3
for(let k=0; k<fruits[].length; k=k+1){
    console.log(fruits.number + fruits.title)
}
VM2213:1 Uncaught SyntaxError: Unexpected token ']'
for(let k=0; k<fruits.length; k=k+1){
    console.log(fruits.number + fruits.title)
}
10VM2226:2 NaN
undefined
for(let k=0; k<fruits[k].length; k=k+1){
    console.log(fruits.number + fruits.title)
}
undefined
for(let k=0; k<fruits.length; k=k+1){
    console.log(fruits.number[k] + fruits.title[k])
}
VM2299:2 Uncaught TypeError: Cannot read properties of undefined (reading '0')
    at <anonymous>:2:30
(anonymous) @ VM2299:2
for(let k=0; k<fruits.length[]; k=k+1){
    console.log(fruits.number[k] + fruits.title[k])
}
VM2315:1 Uncaught SyntaxError: Unexpected token ']'
for(let k=0; k<fruits.length; k=k+1){
    console.log(fruits.number[k] + fruits.title[k])
}
VM2327:2 Uncaught TypeError: Cannot read properties of undefined (reading '0')
    at <anonymous>:2:30
(anonymous) @ VM2327:2
fruits[1].title
'샤인머스켓'
for(let t=0; t<fruits[].length; t=t+1){
    console.log(fruits.number[t] + fruits.title[t])
}
VM2596:1 Uncaught SyntaxError: Unexpected token ']'
for(let t=0; t<fruits.length; t=t+1){
    console.log(fruits.number[t] + fruits.title[t])
}
VM2653:2 Uncaught TypeError: Cannot read properties of undefined (reading '0')
    at <anonymous>:2:30
(anonymous) @ VM2653:2
for(let t=0; t<fruits.length; t=t+1){
    console.log(fruits.number[t], fruits.title[t])
}
VM2713:2 Uncaught TypeError: Cannot read properties of undefined (reading '0')
    at <anonymous>:2:30
(anonymous) @ VM2713:2
for(let t=0; t<fruits.length; t=t+1){
    console.log(fruits[t].number+fruits[t].title)
}
VM2814:2 1레드향
VM2814:2 2샤인머스켓
VM2814:2 3산청딸기
VM2814:2 4한라봉
VM2814:2 5사과
VM2814:2 6애플망고
VM2814:2 7딸기
VM2814:2 8천혜향
VM2814:2 9과일선물세트
VM2814:2 10귤
undefined
for(let t=0; t<fruits.length; t=t+1){
    console.log(fruits[t].number+""+fruits[t].title)
}
VM2833:2 1레드향
VM2833:2 2샤인머스켓
VM2833:2 3산청딸기
VM2833:2 4한라봉
VM2833:2 5사과
VM2833:2 6애플망고
VM2833:2 7딸기
VM2833:2 8천혜향
VM2833:2 9과일선물세트
VM2833:2 10귤
undefined
for(let t=0; t<fruits.length; t=t+1){
    console.log(fruits[t].number+" "+fruits[t].title)
}
VM2839:2 1 레드향
VM2839:2 2 샤인머스켓
VM2839:2 3 산청딸기
VM2839:2 4 한라봉
VM2839:2 5 사과
VM2839:2 6 애플망고
VM2839:2 7 딸기
VM2839:2 8 천혜향
VM2839:2 9 과일선물세트
VM2839:2 10 귤
undefined