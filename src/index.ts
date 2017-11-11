const a:number = 3;
const b:number = 5;
const sum:any = (x:number,y:number,callback:any)=>callback(x+y);

sum(a,b,(res:number)=>{
        console.log(res);
    }
);