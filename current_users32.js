let current_user=[
    
    "Admin",
    "Asad",
    "Ali",
    "Ejaz",
    "Hussain"];

let new_users=[

"Admin","Asad",
"Naqvi",
"Habib",
"Amir"

];
while(new_users&&current_user.length>0);{
if(new_users[0]==="Admin"){
console.log("person will need to enter a new user");
}else{
    console.log("username is available");
}