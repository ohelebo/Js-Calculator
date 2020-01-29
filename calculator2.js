// function punchValue (num) {
//     document.querySelector('.result').innerHTML = num
// }

let join

function punchValue(num) {
    if(join) {
        join = `${join}${num}`
    }
    else {
        join = num
    }
    document.querySelector('.result').innerHTML = join
}

function clearAll(){
    join = ''
    document.querySelector('.result').innerHTML = join
}

function addSign (signs) {
    join = `${join} ${signs} `
    document.querySelector('.result').innerHTML = join;
}

function splitValue(){
    const newVal = join.split(' ')
    const lhs = newVal[0];
    const opr = newVal[1];
    const rhs = newVal[2];

    let ans

    switch (opr){
        case '+':
            ans = parseInt(lhs) + parseInt(rhs);
            break;
        case '-':
            ans = parseInt(lhs) - parseInt(rhs);
            break;
        case 'x':
            ans = parseInt(lhs) * parseInt(rhs);
            break;
        case '/': 
            ans = parseInt(lhs) / parseInt(rhs);
    }
    join = `${join} = ${ans}`
    document.querySelector('.result').innerHTML = join
}

