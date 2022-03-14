//
function notSelfNum(n){ 
  let sum = n;
  
    while(n>0){ 
        sum += n%10; 
        n= Math.floor(n/10); 
    }
    return sum;
}

const selfNum = new Array(10000); 
selfNum.fill(true);

for(let i=1; i<=10000; i++){
    selfNum[notSelfNum(i)] = false;
    
    if(selfNum[i]){
        console.log(i);
    }
}
