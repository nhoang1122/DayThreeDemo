let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister");
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie Lannister has better attack than Jon Snow");
} else {
    console.log("Jon Snow and Jamie Lannister have the same attack");
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow.........(dramatic pause)......is slain");
} else {
    // jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is now ${jonSnowHealth}`);
}

jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow is DEAD");
} else if (jonSnowHealth > jamieLannisterAttack - jonSnowDefense) {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
    console.log(`Jon Snow's health is now ${jonSnowHealth}`);
}

if ((jonSnowHealth + 50) >= 100) {
    jonSnowHealth = 100;
} else {
    jonSnowHealth += 50;
}

let coinLandsHeads = false;
if (coinLandsHeads === true) {
    console.log("HeadShot");
} else {
    console.log("Let Jon Snow Run");
}

if (coinLandsHeads !== false) {
    console.log("HeadShot");
} else {
    console.log("Let John Snow Run");
}

// for (let i = 0; i < 5; i++) {
//     jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
//     console.log(`Jon Snow's health is ${jonSnowHealth}`);
// }

// for (let i = 0; i < 5; i++){
//     if (jonSnowHealth >= 0) {
//         console.log("Jon Snow has been slain");
//     } else {
//         jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
//         console.log(`Jon Snow's health is ${jonSnowHealth}`);
//     }
// }

while (jonSnowHealth > 0) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`Jon Snow's health is ${jonSnowHealth}`);
    if (jonSnowHealth <= 0) {
        console.log("Jon Snow has been slain");
    }
}

