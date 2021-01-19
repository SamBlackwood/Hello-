// var a = 3 + 4;

// if (a === 5 ) {
//     alert("wrong, but closer")
// }else if (a === 6) {
//     alert("almost true")
// }else if (a === 7) {
//     alert("true")
// }else if (a === 8) {
//     alert("almost true")
// }else if (a === 9) {
//     alert("wrong, but closer")
// }else{
//     alert("wrong and wrong")
// }

// switch (выражение) {
//     case "значение":
//         "результат";
//         break;
//     case "значение":
//         "результат";
//         break;
//     default:
//         "результат по умолчанию"
//         break;
// }

// var a = 1 + 4;
// switch (a) {
//     case 5:
//         alert("wrong, but closer");
//         break;
//     case 6:
//         alert("almost true");
//         break;
//     case 7:
//         alert("true");
//         break;
//     case 8:
//         alert("almost true");
//         break;
//     case 9:
//         alert("wrong, but closer");
//         break;
//     default:
//         alert("wrong and wrong");
//         break;
// }

// Яблоко 60 с, Груша 80с, Мандарин 100с, Киви 200с, Банан 60с

// var a = prompt("您想买哪个水果？").toUpperCase();

// .toUpperCase() - функция, которая делает строку в верхнем регистре
// .toLowerCase() - функция, которая делает строку в нижнем регистре

// switch (a) {
//     case 'ЯБЛОКО':
//     case 'БАНАН':
//         alert(a + ' стоит 60с!');
//         break;
//     case 'ГРУША':
//         alert(a + ' стоит 80с!');
//         break;
//     case 'МАНДАРИН':
//         alert(a + ' стоит 100с!');
//         break;
//     case 'КИВИ':
//         alert(a + ' стоит 200с!');
//         break;
//     default:
//         alert(a + " нет у нас такого фрукта!");
//         break;
// }

// var q_1 = confirm("У вас есть жена?")
// var q-2

// if (q_1) {
    
// }

var number = 10;
var a = +prompt("Guess the number, which I made up. :) (From 1 till 10)")
var res = a - number;

switch (res) {
    case 0:
        alert("很好！You guessed!!!")
        break
    case 1:
        alert("很热！");
        break;
    case 2:
        alert("热！");
        break;
    default:
        alert("冷")
        break;
}