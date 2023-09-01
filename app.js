let exp = "undefind : no value, but exist in memory"
console.log(exp);

const daysOfWeek = ["월요일", "죽음요일", "사요일"];

console.log(daysOfWeek);
daysOfWeek.push("휴일은 없어");
console.log(daysOfWeek);


//player beyond list
const player = {
    name: "SyG", // one property
    points: 100,
    fat: true
};
console.log(player);
console.log(player.name);
console.log(player["fat"]);
player.fat = false; //inside const 는 바뀔수있따.
console.log(player.fat);
player.lastName = "이게 추가가 되네";
player.codeFlow = "위에서 아래로";
console.log(player);

//function : 계속해서 재사용하는 코드 조각
function sayHello(nameOfPlayer, old) {
    // function 실행시마다 실행되는 블록
    console.log("hI" +
        "!" +
        "My name Is " +
        nameOfPlayer
        + "and old enough " +
        old
    );
}

sayHello("Dio", 222);
sayHello("Johstar", 34);
sayHello("Lynn", 25);
sayHello("MudaMuda", 9999);

const character = {
    name: "MudaMan",
    say: function (word) {
        console.log(word);
    }
}

character.say("MudaMudaMuda");

character.say("this place is placeHolder")
character.say("제곱은 이렇게 2 ** 3 = " + 2 ** 3)

//return function
function cal(target) {
    return target + 2;
    //no meaning in after return code
}

console.log(cal(25));

// prompt 값을 넣으세요 블록
const agePrompt = prompt("MudaMuda how?");
console.log(typeof agePrompt, typeof parseInt(agePrompt));
console.log("+ 어쩃뜬 스트링이네?" +
    "그럼 어떻게 바꿔?");

