//Functions are invokeable blocks of code!

function printText(text){
    console.log(text)
}

function printNum(a,b,c, ...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}

function printNumbers(start, end){
    for(let i = start; i <= end; i++){
        console.log(`${i}`)
    }
}

function defaultValues(a = 3){
    console.log(a);
}

function numberSign(num){
    if(num === 0) console.log("zero")
        else if(number < 0) console.log("-" )
            else console.log("+")
}

function printGrade(score){

    switch(true){
        case score>=2 && score<=3:
            console.log("fail!");
            break;
        case score>=3 && score <=4:
            console.log("mid");
            break;
        case score>=4 && score <=5:
            console.log("good!");
            break;
        case score >= 5 && score <=6:
            console.log("Outstanding");
            break;                     
    }
}