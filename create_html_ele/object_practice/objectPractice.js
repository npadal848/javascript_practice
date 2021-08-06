let user = {
  name: "Nagesh",
  age: 24,
  phone: 1234567890,
};

alert(user.name);

// user[age] = 25;

alert(user["age"]);

function NewUser(name) {
  (this.name = name), (this.isAllowed = true);
}

let newUser = new NewUser("Nagesh");
for (let key in newUser) {
  console.log(newUser[key]);
}

let newUser2 = new NewUser("Tungu");
for (let key in newUser2) {
  console.log(newUser2[key]);
}
