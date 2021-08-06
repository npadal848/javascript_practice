let user_name = "Nagesh";

console.log(user_name[0]);
console.log(user_name.charAt(0));

console.log("Printing each character from " + user_name);
for (let ch of user_name) {
  console.log(ch + " ");
}

console.log("Done");

for (let i = 0; i < user_name.length; i++) {
  console.log(user_name.charAt(i));
}

console.log("Done");

// console.clear();
console.log("Using slice");

console.log(user_name.slice(0, 2));
console.log(user_name.slice(2));
console.log(user_name.slice(-4, -2)); // return gesh

console.log("Using substring");
console.log(user_name.substring(0, 2));
console.log(user_name.substring(2));
console.log(user_name.substring(-4, -2)); // return '' (Empty String)

console.log("Using substr");
console.log(user_name.substr(0, 10));
console.log(user_name.substr(2));
