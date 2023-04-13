function Fizzz(n){
    sii="";
    for(let i=1;i<=n;i++){
        if(i%4==0 && i%5==0){
            sii+="FizzBuzz ";
        }
        else if(i%4==0){
            sii+="Fizz ";
        }
        else if(i%5==0){
            sii+="Buzz ";
        }
        else{
            sii+=i+" ";
        }
    }
    console.log(sii)
}
numb=6303583976
n=0
while(numb>0){
    n+=numb%10;
    numb=Math.floor(numb/10);
}
Fizzz(n);