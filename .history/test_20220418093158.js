// '' + 1 + 0; //‘10’
// '' - 1 + 0; //  -1
// true + false; //1
// 6 / '3'; //2
// '2' * '3'; //6
// 4 + 5 + 'px'; //‘9px‘
// '$' + 4 + 5; //“$45”
// '4' - 2; // 2
// '4px' - 2; //NaN
// '  -9  ' + 5; //-9 5
// '  -9  ' - 5; //'-14'
// null + 1; //1
// undefined + 1; //NaN
// ' \t \n' - 2; //-2
// // console.log(undefined ==0);
// // console.log(undefined ===undefined);
// // console.log(null ===null);
// 5 > 4; //true
// 'apple' > 'pineapple'; //false
// '2' > '12'; //false true
// undefined == null; //true
// undefined === null; //false
// null == '\n0\n'; //true
// null === +'\n0\n'; //false
// let result;

// result = (a + b < 4 )? 'Below' : 'Over';
// let login = 'aaa'
// let message = login=='Employee'
// ?'hello'
// :login=='Director'
// ?'Greetings'
// :login==''
// ?'No login'
// :''
// console.log(message);
// let a  ,b=2
// console.log(a ?? '暂无');
// let firstname = null
// let lastname = null
// let nickname = 'xc'
// console.log(firstname ?? lastname?? nickname?? 'none');
// let i = 0
// while(i<3){
//     console.log(i);
//     i++
// }
// let i = 3
// while(i){
//     console.log(i);
//     i--
// }
// let i = 0
// do{
//     console.log(i);
//     i++
// } while(i<3)
// for (let i = 0; i <10; i++) {
//      if(i % 2!==0) {continue}
//      console.log(i);

// }
// for (let i = 0;i<3;i++){
//     console.log(i);
// }
// let i = 0
// while(i<3){
//     console.log(i++);
// }
// let n = 10;
// sushu:
// for (let i = 2; i <=n; i++) {
// 	for (let j = 2; j < i; j++) {
// 		if (i % j == 0) continue sushu;
// 	}
// 	console.log(i);
// }
// let x = 'value1112'
// switch (x){
//     case 'value1':
//     console.log(1);
//     break;
//     case 'value2':
//         console.log(2);
//         break;
//         default:
//             console.log('nodefined');
//             break
// }
// let b = 'Edge'
// if(b==='Edge'){
//     console.log("You've got the Edge!" );
// }else if(b==='Chrome'||b==='Firefox'||b==='Safari'||b==='Opera'){

// console.log('Okay we support these browsers too');
// }else{
// console.log('We hope that this page looks ok!');

// }

// function showMessage(from ,text = aaa()){
//     console.log(from +text);
// }
// function aaa(){
// return 2
// }
// showMessage

// let obj  ={
//     a:{
//         b:{
//             c:123
//         }
//     }
// }
// console.log(obj.a.b.f??'-');
function hello(name) {
	let phrase = `hello ,${name}!`;
	say(phrase);
}

function say(phrase) {
	alert(`** ${phrase} **`);
}

hello('xxc')