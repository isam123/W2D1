var arr = [12,3,4,6];
const sum = (array) => {
 
    var inSum = array.reduce( (accumulate , item)=>{
        // accumulate+=item;
        // console.log(accumulate +""+ item);
        return accumulate +item;
    }) 
    return inSum
}
// multiply 
console.log(sum(arr))

var arrMUl2 =[1,2,3,4];

const Multiply = (array) =>{

   var inMult= array.reduce( (accumulate , item)=>{

            return accumulate*item;
    })

    return inMult;
}

// console.log(Multiply(arrMUl2))

// reverse 

const reverse = (string) =>{

    var array =string.split("");
    var len = array.length;
    var result = array.reduce((accumulate ,item) =>{
    
           return item+accumulate;
     
    }) 
    return result;

}

console.log(reverse("isam"));

const filterLongWords = (array , i) => {

    var result = array.filter((item) =>{
     
         return item.length>i;

    })
    return result
}

console.log(filterLongWords(["isam","dss","weww","sd"],2));