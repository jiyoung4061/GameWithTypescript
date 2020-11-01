// js -> ts : 먼저 타입추론으로 프로그래밍을 하되, 오류가 나는 부분의 타입을 명시적으로 선언해준다.
var body = document.body;
var candidate;
var array = [];
function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (var i = 0; i < 4; i += 1) {
        var chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
chooseNumber();
console.log(array);
var resultOfBaseball = document.createElement('h1');
body.append(resultOfBaseball);
var formOfBaseball = document.createElement('form');
document.body.append(formOfBaseball);
var inputOfBaseball = document.createElement('input');
formOfBaseball.append(inputOfBaseball);
inputOfBaseball.type = 'text';
inputOfBaseball.maxLength = 4;
var buttonOfBaseball = document.createElement('button');
buttonOfBaseball.textContent = '입력!';
formOfBaseball.append(buttonOfBaseball);
var wrongCount = 0;
formOfBaseball.addEventListener('submit', function (event) {
    event.preventDefault();
    var answer = inputOfBaseball.value;
    if (answer === array.join('')) { // 답이 맞으면
        resultOfBaseball.textContent = '홈런';
        inputOfBaseball.value = '';
        inputOfBaseball.focus();
        chooseNumber();
        wrongCount = 0;
    }
    else { // 답이 틀린 경우
        var answerArray = answer.split('');
        var strike = 0;
        var ball = 0;
        wrongCount += 1;
        if (wrongCount > 10) {
            resultOfBaseball.textContent = "10번 넘게 틀려서 실패! 답은" + array.join(',') + '이었습니다!';
            inputOfBaseball.value = '';
            inputOfBaseball.focus();
            chooseNumber();
            wrongCount = 0;
        }
        else {
            console.log('답이 틀리면', answerArray);
            for (var i = 0; i <= 3; i++) {
                if (Number(answerArray[i]) === array[i]) {
                    console.log("같은 자리?");
                    strike += 1;
                }
                else if (array.indexOf(Number(answerArray[i])) > -1) {
                    console.log("겹치는 숫자?");
                    ball += 1;
                }
            }
            resultOfBaseball.textContent = strike + " \uC2A4\uD2B8\uB77C\uC774\uD06C " + ball + " \uBCFC";
            inputOfBaseball.value = '';
            inputOfBaseball.focus();
        }
    }
});
