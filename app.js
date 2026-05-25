/* LOGIN */

const loginScreen =
document.getElementById("loginScreen");

const app =
document.getElementById("app");

if(localStorage.getItem("loggedIn")
=== "true"){

loginScreen.classList.add("hidden");

app.classList.remove("hidden");

}

function enterApp(){

localStorage.setItem(
"loggedIn",
true
);

loginScreen.classList.add("hidden");

app.classList.remove("hidden");

}

function logout(){

localStorage.removeItem(
"loggedIn"
);

location.reload();

}

/* XP */

const xp =
document.getElementById("xp");

const profileXP =
document.getElementById("profileXP");

const streakText =
document.getElementById("streakText");

const gmBtn =
document.getElementById("gmBtn");

let points =
localStorage.getItem("points")
? Number(localStorage.getItem("points"))
: 12840;

let streak =
localStorage.getItem("streak")
? Number(localStorage.getItem("streak"))
: 8;

xp.innerHTML =
points + " XP";

profileXP.innerHTML =
points;

streakText.innerHTML =
"Day " + streak + " / 10 completed";

/* DAILY GM */

const today =
new Date().toDateString();

let claimedDate =
localStorage.getItem("claimedDate");

if(claimedDate === today){

gmBtn.innerHTML =
"GM Claimed ☀️";

gmBtn.style.opacity =
"0.7";

}

gmBtn.addEventListener("click", () => {

if(claimedDate === today)
return;

claimedDate = today;

streak += 1;

points += 80;

if(streak % 10 === 0){

points += 500;

showToast(
"🔥 10 Day Bonus +500 XP"
);

}

localStorage.setItem(
"points",
points
);

localStorage.setItem(
"streak",
streak
);

localStorage.setItem(
"claimedDate",
claimedDate
);

xp.innerHTML =
points + " XP";

profileXP.innerHTML =
points;

streakText.innerHTML =
"Day " + streak + " / 10 completed";

gmBtn.innerHTML =
"GM Claimed ☀️";

gmBtn.style.opacity =
"0.7";

showToast(
"☀️ GM Claimed +80 XP"
);

});

/* QUESTS */

const quests =
document.querySelectorAll(".quest");

quests.forEach((quest, index) => {

quest.addEventListener("click", () => {

let reward = 0;

if(index === 0)
reward = 50;

if(index === 1)
reward = 30;

if(index === 2)
reward = 120;

if(reward > 0){

points += reward;

localStorage.setItem(
"points",
points
);

xp.innerHTML =
points + " XP";

profileXP.innerHTML =
points;

showToast(
"🚀 +" +
reward +
" XP"
);

}

});

});

/* TOAST */

function showToast(text){

const toast =
document.createElement("div");

toast.innerHTML =
text;

toast.style.position =
"fixed";

toast.style.bottom =
"110px";

toast.style.left =
"50%";

toast.style.transform =
"translateX(-50%)";

toast.style.padding =
"16px 22px";

toast.style.borderRadius =
"18px";

toast.style.background =
"rgba(0,0,0,0.75)";

toast.style.color =
"white";

toast.style.fontWeight =
"700";

toast.style.zIndex =
"999";

document.body.appendChild(toast);

setTimeout(() => {

toast.remove();

}, 2500);

}
