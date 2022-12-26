// const person: {
//   name: string;
//   age: number;
// } = { //이렇게 타입을 명시해줄수도 있지만 아래처럼 값이 할당되면 타입추론이 일어나므로 써줄필요는 없다.
const person = {
  name: 'Maximilian',
  age: 30
};

console.log(person.name);//가능
console.log(person.nickname)//불가능 - nickname속성이 객체에 없다. person을 자동으로 추론해서 내부에는 name, age속성이 있고 각가가 string, number타입이라고 추론한다.
/**
 * 
 * 
 */