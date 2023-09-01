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
// const agePrompt = prompt("MudaMuda how?");
// console.log(typeof agePrompt, typeof parseInt(agePrompt));
// console.log("+ 어쩃뜬 스트링이네?" +
//     "그럼 어떻게 바꿔?" +
//     "parseInt 라는 메소드사용");

const usefulFunc = isNaN(false);
if (usefulFunc)
    console.log("숫자아님~");

console.log("당연히 else if 도 있다.")
console.log("document 객체는 내 브라우저를 의미한다.")

const title = document.getElementById("title");
title.innerText = "알겠으니까 바꿔. by JS";

const classes = document.getElementsByClassName("h3");
console.log(classes);

const qs = document.querySelector(".h3/*div*/ h4");
const qsIdFinder = document.querySelector("#h3");
const qsProxy = document.getElementById("h3");
console.log(qs);
console.log(qsIdFinder);
console.log(qsProxy);
const qsa = document.querySelectorAll(".h3/*div*/ h4");
console.log(qsa);

title.style.color = "green";

function handleTitleCLick() {
    console.log("Stop clicking Title");
    if (title.style.color === "blue") {
        title.style.color = "green";
    } else {
        title.style.color = "blue";
    }

}

function asdf() {
    console.log("testmethod1");
}

title.addEventListener("mouseover", handleTitleCLick);
title.onclick = asdf;

window.addEventListener("resize", handleWindow);

function handleWindow() {
    document.body.style.backgroundColor = "tomato";
}

title.onclick = reRoll;

function reRoll() {
    if (document.body.style.backgroundColor === "tomato") {
        document.body.style.backgroundColor = "beige";
    }
}

function good() {
    alert("I'm in online");
}

window.addEventListener("online", good);