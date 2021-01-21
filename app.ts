// const person: {
//    name: string;
//    age: number;
// } = {
// const person: {
//    name: string;
//    age: number;
//    hobbies: string[];
//    role: [number, string];
// } = {
//    name: "Maximilian",
//    age: 30,
//    hobbies: ["Sports", "Cooking"],
//    role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
   ADMIN = 'ADMIN',
   READ_ONLY = 4,
   AUTHOR,
}

const person = {
   name: "Maximilian",
   age: 30,
   hobbies: ["Sports", "Cooking"],
   role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admiin", "user"];
console.log(person.role);

let favoriteActivities: string[];
favoriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
   console.log(hobby.toUpperCase());
   //console.log(hobby.map()); // ERROR
}

if (person.role === Role.AUTHOR) {
   console.log("is author");
}
