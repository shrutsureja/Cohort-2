let userName = [ "Shrut", "Khwab", "Raman"];
console.log(userName);
console.log(typeof userName[0]);

const user1 = {
    firstName : "Shrut",
    gender: "male"
}

console.log(user1);
console.log(typeof user1);
// console.log(user1.["firstName"]);
console.log(user1.firstName);

const allUsers = [{
    firstName: "Shrut",
    gender: "male"
}, {
    firstName: "priya",
    gender: "female"
}, {
    lastName: "patel",
    gender: "male"
}]
// DOUBT : CAN WE HAVE DIFFERENt KEYS?
//what can be the solution to have different keys !!
for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"]);
    }
}
// DOUBT : CAN WE HAVE DIFFERENt KEYS?
//what can be the solution to have different keys !!