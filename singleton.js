// class Singleton{
//     name = "panapn";
//     constructor(name){
//         this.name = name;
//     }
//     static age = 33;
//     pringName(){
//         console.log(this.name);
//     }
//     printAge(){
//         console.log(Singleton.age);
//     }
// }

// const single = new Singleton("jack");
// single.pringName();
// single.printAge();
// console.log(Singleton.age)
/**
 * 单例模式
 */
class Singleton{
    name = "jack ma"
    age = 0;
    constructor(){
        this.age ++
        console.log("我被调用了===>")
    }
    static instance = null;
    static getInstance(){
        if(Singleton.instance == null){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}



const one = Singleton.getInstance();
const two = Singleton.getInstance();
const three = Singleton.getInstance();
console.log(one,two)


/**
 * 静态工厂
 */

 class Student{
     constructor(name,score){
       this.name = name;
       this.score = score;
     }

     static create(name,score){
         return new Student(name,score);
     }
 }

 const stu1 = Student.create("大雄",0);
 const stu2 = Student.create("胖虎",2);
 console.log(stu1,stu2);