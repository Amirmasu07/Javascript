let a= prompt("enter a limit value you want to stop at");
    a= Number.parseInt(a);
let x = prompt("enter only numaric value");
    console.log(typeof x);
    x = Number.parseInt(x);
    console.log(typeof x);
    console.log("string prints to this value",x);
    
    if(x>a)
    {
        alert("enter below",a);
    }
    else if(x%2==0){
        alert("value is even");
    }
    else{
        alert("value is odd");
    }

    // for(a=0; a<=x; a++)
    // {
    //     // console.log(a);
    //     if (a%2==0)
    //     {
    //         console.log(a,"is even");
    //     }
    //     else{
    //         console.log(a,"is odd");
    //     }
    // }
