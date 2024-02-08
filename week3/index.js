let temperature = 30;

if (temperature > 25) {
    console.log("It's Hot");
} else if (temperature >= 15 && temperature <= 25) {
    console.log("It's Comfortable");
} else {
    console.log("It's cold");
}

const food = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭"];
// for loop print items with index
for (let i = 0; i < food.length; i++) {
    const item = food[i];
    console.log(`${i + 1}. ${item}`); // string interpolation
}


//for of loop: print items in the list

for (const value of food){
    console.log(value);
}



// while loop
//a practical example of while loop in js

let balance = 1000;
let terget= 5000;
let monthlyDeposit = 500;
// john wants to save $5000 for trip around Europe.
// he now have 1000 saved and plan to deposit 500 into savings account evry month
// he wants to track his prograss and wants to know how may month it will take to reach his terget

console.log("Starting savings: $"+balance);
let months =0;
while(balance<terget){
    months++;
    balance+= monthlyDeposit;
    console.log(`$${balance} saved after ${months} months`);
}



// Switch statement
//bob is building an e-comarce website and
// wants to display a massage to the user base on the status of therir order
//the possible status value sre: success , prnding, shipped, and failed.

let orderStatus = "success";
switch (orderStatus){
    case"success":
        console.log("Your order was successfull. Thank you for shopping with us!");
        break;
    case"pending":
        console.log("Your order is still pending. We will update you as soon as we have more information");
        break;
    case"shipped":
        console.log("Your order has been shipped. You will receive it soon");
        break;
    case"failed":
        console.log("Your order has failed. please try again latter or contact us.");
        break;
    default:
        console.log("Invalid status. Please contact us.");
        break;
}