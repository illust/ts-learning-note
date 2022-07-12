interface Inter1{
    name: string;

    hello(): void;
}


class Son implements Inter1{
    name: string;

    hello(){
        console.log("hello");
        
    }
}

const s1 = new Son();
console.log(s1.name);
s1.hello();
