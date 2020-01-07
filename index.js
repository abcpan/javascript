
//  const arr = [ {
//   "organId" : 1000069,
//   "organName" : "四格研发物业",
//   "organCode" : "01000043",
//   "orgType" : 1,
//   "orgTypeCode" : "property",
//   "parId" : 1,
//   "children" : [ {
//     "organId" : 5133,
//     "organName" : "四格研发",
//     "organCode" : "01000043003001",
//     "orgType" : 6,
//     "orgTypeCode" : "community",
//     "parId" : 1000069,
//     "children" : [ ]
//   } ]
// } ]


// // function findOrganName(list){
// //   const targetList = [];
// //   function findName(list){
// //     if(!Array.isArray(list) || list.length ===0){
// //        return;
// //     }
// //     for(const child of list){
// //       const {organName,organId} = child;
// //       targetList.push({organName,organId});
// //       findName(child.children)
// //     }
// //   }
// //   findName(list);
// //   return targetList;
// // }
// // console.log(findOrganName(arr))

// function findSuper(organCode,organList){
//   const targetList = [];
//   function findResult(organCode,organList){
//     if(!Array.isArray(organList) ){
//       return;
//     }
//     for(const child of organList){
//       if(organCode.startsWith(child.organCode)){
//         targetList.push({organName:child.organName,organId:child.organId});
//         findResult(organCode,child.children)
//       }
//     }
    
//   }
//   findResult(organCode,organList)
//   console.log(targetList)
// }
// findSuper("01000043003001",arr)
// const kk = []
// Array.prototype.push.apply(kk,["wo"])
// console.log(kk);
// const testArr = [];
// for(let i =0;i<2000;i++){
//   testArr.push(i.toString());
// }
// console.time("concat")
// const item = testArr.join("");
// console.log(item)
// console.timeEnd("concat");


// console.time("+")
// let str  = "";
// for(const c of testArr){
//   str+= c;
// }
// console.log(str);
// console.timeEnd("+")




// class QuickSort{
//     swap(arr,a,b){
//       const temp = arr[a];
//       arr[a] = arr[b];
//       arr[b] = temp;
//     }
//     /**
//      * 
//      * @param {Array} arr 
//      * @param {Number} left 
//      * @param {Number} right 
//      */
//     partition(arr,left,right){
//       /**
//            * 开始时不知最终pivot的存放位置，可以先将pivot交换到后面去
//            * 这里直接定义最右边的元素为基准
//            */
//       const pivot = arr[right];
//       /**
//            * 开始时不知最终pivot的存放位置，可以先将pivot交换到后面去
//            * 这里直接定义最右边的元素为基准
//            */
//       let storedIndex = left;
//       for(let i = left;i<right; i++){
//         if(arr[i] < pivot){
//           /**
//                    * 遍历数组，找到小于的pivot的元素，（大于pivot的元素会跳过）
//                    * 将循环i次时得到的元素，通过swap交换放到storeIndex处，
//                    * 并对storeIndex递增1，表示下一个可能要交换的位置
//                    */
//           this.swap(arr,storedIndex,i)
//           storedIndex ++; //
//         }
//       }
//        // 最后： 将pivot交换到storeIndex处，基准元素放置到最终正确位置上
//       this.swap(arr,right,storedIndex);
//       return storedIndex;
//     }
//     
  
//     sort(arr,left,right){
//       if(left >= right){return}
//       let storedIndex = this.partition(arr,left,right);
//       this.sort(arr,left,storedIndex -1);
//       this.sort(arr,storedIndex+1,right);
//     }
//     static quickSort(arr){
//       new QuickSort().sort(arr,0,arr.length-1);
//       return arr;
//     }
//   }
//   console.log(QuickSort.quickSort([8,11, 4, 90, 8, 34, 67, 1, 26, 17]));

//  class Person{
//    constructor(){
     
//    }
//    static name = "panpan";
//    static say(name){
//      console.log(name)
//    }

//    doing(){
//     Person.say(Person.name);
//    }
//  }

//  const person = new Person();
//  person.doing();
//  console.log(person.name)

//  const searchObj = new URLSearchParams("payInfoStr=%7B%22appId%22%3A%22wx2421b1c4370ec43b%22%2C%22timeStamp%22%3A%221395712654%22%2C%22nonceStr%22%3A%22e61463f8efa94090b1f366cccfbbb444%22%2C%22package%22%3A%22prepay_id%3Du802345jgfjsdfgsdg888%22%2C%22signType%22%3A%22MD5%22%2C%22paySign%22%3A%2270EA570631E4BB79628FBCA90534C63FF7FADD89%22%7D&successBackUrl=http%3A%2F%2F192.168.5.10%2F%23%2Fhouse-pay%2Fpay-result")
//  console.log(searchObj.get("payInfoStr"))

//  const buffer = new ArrayBuffer("我是中国人")

//  console.log(String(buffer))

//  const demos = ["pan","pan","da","xiong","miao"];
//  const newArr = ["nanjing"];
//  Array.prototype.push.apply(newArr,demos);
//  console.log(newArr)

// @test(true)
//  class Student{

//  }
//  function test(bool){
//    return function (target){
//     target.isIterable = bool;
//    }
//  }
//  console.log(Student.isIterable);


 function filter(arr,lambda){
   const temp = [];
   for(const item of arr){
     if(lambda(item)){
       temp.push(item);
     }
   }
   return temp;
 }
 function forEach(arr,lambda){
   for(const item of arr){
     lambda(item)
   }
 }

 const arr = ["pan","deng","gao","feng","shi","yi","xiang","liao","bu","qi","de","zhuang","ju"];
 console.log(filter(arr,item=>item.length === 3));

 forEach(arr,item=>console.log(item))


 function reduce(list,defaultValue,lambda){
    let result = defaultValue ===undefined?0:defaultValue;
    for(const item of list){
      result = lambda(item,result);
    }
    return result
 }

 const countList = [1,2,3,4,5,6,7,8,9,10,55,100,22,33];

 const ret = reduce(countList,0,(a,b)=>a+b)
 console.log(ret);

 console.log(reduce(countList,0,(a,b)=>Math.max(a,b)))