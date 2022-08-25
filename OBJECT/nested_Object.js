const users = [{ id: 1, name: "abul", job: "doctor" }];

// get the object
console.log(users[0]);
//get the object data
console.log(users[0].name);

const data = {
  count: 5000,

  data: [
    { id: 1, name: "Babul", job: "leader" },
    { id: 2, name: "Rahim", job: "leader" },
  ],
};
const firstJOb = data.data[0].job;
// console.log(firstJOb);

const user = {
  id: 5001,
  name: "Tomas Alba Adison",

  address: {
    street: {
      first: "35/A Basundhara R/A",
      second: "Third Floor",
      third: "Right Side",
    },

    postOffice: "Cantonment",
    city: "Dhaka",
  },
};

const userFloor = user.address.street.second;
//use of '?'
const userFloor1 = user.address.street?.second;//if there are no value don't go forward..
console.log(userFloor);
