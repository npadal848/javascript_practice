console.clear()

var names = ["nagesh", "puja", "Sivu", "Tukuna", "Chintu", "Pintu"];

console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[0]="Nagesh");
console.log(names);
console.log(names[1]="Pooja");
console.log(names);

// add
names.push("New");

//remove

names.pop()

// splice(startIndex, no of deleting items, iteams to be added...)
names.splice(1, 0, "Simbba", "Razni")
console.log(names)

// splice(startIndex, no of deleting items)
names.splice(4,4)
console.log(names)

var friends = [
  "Ramesh", "Suresh", "Manoj", "Binod"
]
console.log(friends);

//concate
console.log("==================")
var myAllFriends = names.concat(friends);
console.log(myAllFriends)

//sorting
console.log(myAllFriends.sort())

//reverse
console.log(myAllFriends.reverse())



