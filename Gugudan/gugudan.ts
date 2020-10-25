let num1 = Math.ceil(Math.random() * 9);
let num2 = Math.ceil(Math.random() * 9);
let result = num1 * num2;
let string = 'hello';
let boolean = true;

const word = document.createElement('div');
word.textContent = `${num1} 곱하기 ${num2} 는?`;
document.body.append(word);

const form = document.createElement('div');
document.body.append(form);

const input = document.createElement('input');
input.type = 'number';
form.append(input);

const button = document.createElement('button');
button.textContent = '입력';
form.append(button);

const resultDiv = document.createElement('div');
document.body.append(resultDiv);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // if(result === input.value){ // error : result는 number타입, input.value가 String타입이라서 무조건 fasle가 됨
    if(result === Number(input.value)){ // 정답을 맞춘경우
        resultDiv.textContent='딩동댕';
        num1 = Math.ceil(Math.random()*9);
        num2 = Math.ceil(Math.random()*9);
        result = num1 * num2;
        word.textContent = `${String(num1)} 곱하기 ${String(num2)} 는?`;
        input.value="";
        input.focus();
    } else { // 정답을 틀린 경우
        resultDiv.textContent="땡";
        input.value="";
        input.focus();
    }   
})