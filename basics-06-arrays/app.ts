// const person: {
//   name: string;
//   age: number;
//   hobbies : string[] // 문자열 배열 할당
// } = {
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];// 문자열 배열 할당
favoriteActivities = ['Sports'];//'Sports' 만 할당하면 에러
//any[] 로 타입을 설정하면 배열 내에 어떤 값이든 넣을 수 있다. 유연하지만 추천되지는 않음 

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
