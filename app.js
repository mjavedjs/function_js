// function self(number , number2){
// return number +number2;
// }

//  const restul=self(89,89);
//  console.log(restul);
// // user loing
// function UserLogin(userName){
//     return userName +  "    loginn in";
// }
// const result= UserLogin("muhammad javed");
// console.log(result)

//  loop

// for (let i = 1; i <= 10; i++) {
//     let element = i
//     if (element == 5) {
//         console.log("5 Number is my favurite number")
//     }

//     console.log(element);

// }
//  Table 1 till  10

// for(let i=1; i<=10; i++){
//     const element=i;
//     console.log("out loop  "+i);
//     for(let j=1; j<=10; j++){
//         // console.log("The inner j loop "+j)

//         console.log(i + " * "+ j + " = "+ i * j)
//     }
// }
//    5 number par rak jana key word break;
// for(let i=1; i<=20; i++){
//     const element=i
//     console.log(i);
//     if(element==5){
//         console.log("5 is deceted")
//         break
//     }
// }
// key word continue
// for(let i=1; i<=20; i++){
//     const element=i
//     console.log(i);
//     if(element==5){
//         console.log("5 is deceted leki contiue na rekha")
//         continue
//     }
// }

function calculation() {
    for (let i = 1; i <= 10; i++) {
        console.log("The inner loop  " + i);
        for (let j = 1; j <= 10; j++) {
            console.log(i + " * " + j + " = " + i * j);
        }
    }
}
calculation();
