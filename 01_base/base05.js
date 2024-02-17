// デフォルト値
const sayHello = (name="guest") => console.log(`こんにちは!${name}さん!`);
sayHello();


const myProfile = {
    age: 31
}
const {age, name="guest"} = myProfile;
console.log(age)
console.log(name)