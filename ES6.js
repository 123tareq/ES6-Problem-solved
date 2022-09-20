// Problem practice-6  solved 
const number=[1,2,3,4,6];
const calculateElement=number.map(x=>x*5);
// console.log(calculateElement);


let sum= [];

     for(i=0;i<number.length;i++){
        const element=number[i];
          const  total=element*5;
           sum.push(total);
         
         
 
    }

// console.log(sum);

// problem practice-6 solved 
const numberArray=[1,2,3,4,5,6,7,8,9,10]
const oddNumber=numberArray.filter(x=>x%2===1);
// console.log(oddNumber);

let num=[];
for(i=0;i<numberArray.length;i++){
    const element=numberArray[i];
     if(element%2===1){
        num.push(element);
     }
}

console.log(num)


// practice problem-7 solved
//  const Products=[
//     {name:'phone',price:'25000'},
//     {name:'Leptop',price:'40000'},
//     {name:'Watch',price:'15000'},
//     {name:'Tablet',price:'30000'}
    
//  ];

//  const findObject=Products.find(x=>x[1].price);
//  console.log(findObject);

