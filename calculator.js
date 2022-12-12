let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let button = document.querySelectorAll('button');
let eraseBtn = document.querySelector('#erase');
let clearBtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = [];

clearBtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
})

button.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(!btn.id.match('erase')) {
            realTimeScreenValue.push(btn.value) 
            currentInput.innerHTML = realTimeScreenValue.join('');
        
            if(btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }
        if(btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            
        }
        if(btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
        }
        if(typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0;
        }
    })
})