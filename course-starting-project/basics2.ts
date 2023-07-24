// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maxi",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN = 5,
  READ_ONLY = "read_only",
  author,
}
const person = {
  name: "Maxi",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[]; //문자열들로 이루어진 배열을 말한다. 배열 안에 숫자가 들어가면 안된다.
favoriteActivities = ["sports"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); Error!!
}

if (person.role === Role.author) {
  console.log("is author");
}
