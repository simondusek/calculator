let firstNum
let secondNum
let operator

document.getElementById('1').addEventListener('click', function(){
    document.getElementById('display').textContent += 1
    }
);
document.getElementById('2').addEventListener('click', function(){
    document.getElementById('display').textContent += 2
    }
);
document.getElementById('3').addEventListener('click', function(){
    document.getElementById('display').textContent += 3
    }
);
document.getElementById('4').addEventListener('click', function(){
    document.getElementById('display').textContent += 4
    }
);
document.getElementById('5').addEventListener('click', function(){
    document.getElementById('display').textContent += 5
    }
);
document.getElementById('6').addEventListener('click', function(){
    document.getElementById('display').textContent += 6
    }
);
document.getElementById('7').addEventListener('click', function(){
    document.getElementById('display').textContent += 7
    }
);
document.getElementById('8').addEventListener('click', function(){
    document.getElementById('display').textContent += 8
    }
);
document.getElementById('9').addEventListener('click', function(){
    document.getElementById('display').textContent += 9
    }
);
document.getElementById('+').addEventListener('click', function(){
    firstNum = Number(document.getElementById('display').textContent)
    console.log(document.getElementById('subsection').textContent = `${firstNum} +`)
    //document.getElementById('subsection').textContent = `${firstNum} +`
    document.getElementById('display').textContent = ''
    operator = '+'
    }
);
document.getElementById('-').addEventListener('click', function(){
    firstNum = Number(document.getElementById('display').textContent)
    console.log(document.getElementById('subsection').textContent = `${firstNum} -`)
    //document.getElementById('subsection').textContent = `${firstNum} +`
    document.getElementById('display').textContent = ''
    operator = '-'
    }
);
document.getElementById('=').addEventListener('click', function(){
    secondNum = Number(document.getElementById('display').textContent)
    if (operator == '+'){
    document.getElementById('display').textContent = firstNum + Number(document.getElementById('display').textContent)
    document.getElementById('subsection').textContent = `${firstNum} + ${secondNum} = `
    } else {
        document.getElementById('display').textContent = firstNum - Number(document.getElementById('display').textContent)
        document.getElementById('subsection').textContent = `${firstNum} - ${secondNum} = `
    }

    
    }
    
);

document.addEventListener('click', () => console.log(typeof(document.getElementById('display').textContent)))














