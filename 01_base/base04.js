// テンプレート文字列
const name = "田中太郎";
const age = 30;

const message1 = "My name is " + name + ".I'm " + age + " old.";
console.log(message1);

const message2 = `My name is ${name}.I'm ${age} old.`;
console.log(message2);


// アロー関数
function func1(str) {
    return str;
}
console.log(func1("func1です。"));

const func2 = str => str;
console.log(func2("func2です。"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(2,6));


// 分割代入
const myProfile = {
    name2: "田中太郎",
    age2: 31
};
// const message3 = `名前は${myProfile.name2}です。年齢は${myProfile.age2}歳です。`
// console.log(message3)
const {name2, age2} = myProfile;
const message4 = `名前は${name2}です。年齢は${age2}歳です。`
console.log(message4)

const myInfo = ["斎藤一郎", 40];
const [name3, age3] = myInfo
const message5 = `名前は${name3}です。年齢は${age3}歳です。`
console.log(message5)
