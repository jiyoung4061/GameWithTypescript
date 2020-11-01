let imgCoords: RSP[keyof RSP] = '0'; // 현재 이미지의 좌표

// const rsp: RSP = {
//     ROCK: '0',
//     SCISSORS: '-142px',
//     PAPER: '-284px',
// } as const; // read only 가 되면서 수정이 불가능해짐

interface RSP { // as const한 것과 같아지려면 readonly 를 붙여줘야함
    readonly ROCK: '0',
    readonly SCISSORS:'-142px',
    readonly PAPER : '-284px',
}

const rsp: RSP = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px',
}

const score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1,
} as const;


function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP { 
    // Object.keys(rsp) : rsp라는 "string" 배열이 됨!
    return (Object.keys(rsp) as ['ROCK', 'SCISSORS', 'PAPER']).find((k)=> rsp[k] === imgCoords)!; // ! : typescript가 undefined가 나올 것을 경고하지만 프로그래머가 강제로 무시하는 것
}

let interval: number;
let point: number = 0;
document.querySelectorAll('.btn').forEach((btn)=>{
    btn.addEventListener('click', function (this: HTMLButtonElement, e: Event) {
        // this 쓸 경우에는 arrow function안됨!
        // 매개변수는 첫번째가 this, 두번째가 event
        clearInterval(interval);
        setTimeout(intervalMaker, 2000);

        const myChoice = this.textContent as keyof RSP; // myChoice의 타입을 강제로 변환 시켜줌 
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgCoords)];
        const diff = myScore - computerScore;
        if(diff === 0) {
            console.log('비겼습니다');
        } else if([-1,2].includes(diff)){
            console.log('이겼습니다');
            point++;
        } else {
            console.log('졌습니다');
            point--;
        }
        (document.querySelector('#point') as HTMLDivElement).textContent = String(point);
    })
});

function intervalMaker() {
    interval = setInterval(function () {
        if(imgCoords === rsp.ROCK){
            imgCoords= rsp.SCISSORS;
        } else if (imgCoords === rsp.SCISSORS){
            imgCoords = rsp.PAPER;
        } else {
            imgCoords = rsp.ROCK;
        }

        // (document.querySelector('#computer')!.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0`;
        
        if(document.querySelector('#computer')){ // !를 하지 않고 대신 쓸 수 있는 방법 => null이 아닐때만 실행됨.
            (document.querySelector('#computer')as HTMLDivElement).style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0`;
        }

        // 제네릭 사용 방법
        // if(document.querySelector<HTMLDivElement>('#computer')){ // !를 하지 않고 대신 쓸 수 있는 방법 => null이 아닐때만 실행됨.
        //     document.querySelector<HTMLDivElement>('#computer').style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0`;
        // }
        // 위에 방법이 오류나면 computer라는 다른 변수로 가져와서 사용
        // const computer = document.querySelector('#computer')as HTMLDivElement
        // if(computer){ // !를 하지 않고 대신 쓸 수 있는 방법 => null이 아닐때만 실행됨.
        //     computer.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0`;
        // }
    },100);
}
intervalMaker();
