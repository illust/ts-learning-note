interface User {
    name: string,
    age: number
}

interface Person{
    name: string;
    age: number;
}

let user: User = {
    name: 'svenwong',
    age: 28
}

/**
 * 类型断言：
 * 1.<>
 * 2.as
 * 尖括号格式会与react中JSX产生语法冲突，因此更推荐使用as语法。
 */
const person = <Person>{};
const person2 = {} as Person;

person.name = "walkingSun";
person.age = 544;

person2.name = 'teacherTang';
person2.age = 23;

console.log(user);
console.log(person);
console.log(person2);

/**
 * 双重断言
 * as ... as ...
 */

const person3 = 'randy' as any as Person;
person3.age = 3;
console.log(person3);   // console output: randy


/**
 * 非空断言
 * 用！表示，用来断定某变量一定不是 null 和 undefined
 */

let flag: null | undefined | string;
// flag!.toString();       // ok!

/**
 * 确定赋值断言
 * 通过在实例属性或者变量声明后面放置一个!号，从而告诉TypeScript该属性或变量会被明确赋值。
 */
let x!: number;
initialize();
console.log(2 * x); // ok!

function initialize(){
    x = 10;
}

/**
 * 类型守卫
 * 常用的有typeof,instanceof,in
 * 用于缩小类型的范围
 */
/** typeof 
 * 通过typeof精细化类型进行操作，避免了不必要的错误
*/
function double(input: string | number | boolean){
    if(typeof input === "string"){
        return input + input;
    } else{
        if(typeof input === "number"){
            return input * 2;
        }else{
            return !input;
        }
    }
}

/**
 * instanceof
 * 是通过构造函数来细化类型的一种类型保护方式
 */
class Person4 {
    name = "Candy";
    age = 24;
}

class Animal4 {
    name = "dog";
    color = "green";
}

function getSomething(arg: Person4 | Animal4){
    // 没有类型守卫，不管使用啥属性都报错
    // console.log(arg.age);

    // 类型细化为Person
    if(arg instanceof Person4){
        console.log(arg.name);
        console.log(arg.age);   
    }
}

getSomething(new Person4())

/**
 * 类型别名
 * type SomeName = someValidTypeAnnotation
 * 类型别名有时和接口很像,但是可以作用于原始值、联合类型、元组以及其它任何你需要手写的类型.
 */
type some = boolean | string | number;
const b: some = true;   // ok
const c: some = 23;     

// 类型别名可以给已有类型取别名：
type newstring = string;
const str: newstring = 'Candy';

// 也可以是泛型
type Container<T> = {value: T};
let container: Container<string> = {value: "hello"};
console.log("container",container);
