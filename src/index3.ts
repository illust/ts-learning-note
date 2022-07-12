/**
 * 1)抽象类A1和Person不能被实例化
 * 2)抽象类Person可以继承抽象类，并且不需要实现抽象属性和方法
 * 3)只有实现了抽象类的所有抽象属性和方法的普通类Human才可以实例化
 */
abstract class A1{
    abstract age: number;
    sex: string = "male";

    say(){
        console.log("say");
    }

    // 抽象方法
    abstract hi(): void;
    abstract hi2(num: number): number;
}

abstract class Person extends A1{
    hi(): void {
        console.log("hi");
        
    }
}

class Human extends Person{
    age: number = 28;
    hi2(num: number){
        return num + 1;
    }
}

const sun = new Human();
console.log(sun.age);
