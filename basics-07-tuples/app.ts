//튜플은 길이가 고정된 배열이다. 타입도 고정.


// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];//튜플  튜플은 자바스크립트에는 없는 타입으로 타입스크립트에서 사용할때 명시적으로 타입을 작성해주어야한다. 그렇지 않으면 person.role[1] = 10; 처럼 튜플을 깨버리는 경우가 가능하다.(push는 예외적으로 튜플에서도 사용이 가능하다. 그래서 타입스크립트로 막지는 못한다.  그래도 person.role = [1,'user','random'] 같은 형식이 깨지는 값을 할당하지는 못한다.)
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
