# GameWithTypescript

### [About Typescript]  
- tsc : typescriptcompile 명령어로 컴파일 했을때, 같은 이름의 js파일이 생김(따라서 항상 html에는 js파일을 스크립트로 가져옴)  
  [*option*]  
  -w : watch 옵션, ts파일을 감시하면서 저장했을 때 변경사항을 바로 컴파일해서 js파일에 적용시켜줌
``` bash
tsc gugudan.ts -w
```
- error code : typescript에서 제공되는 에러 코드는 같은 유형의 에러끼리 묶여있으니 에러 구글링할 때 참조
``` bash
error TS3553 ...
```
**.ts vs .d.ts**  
.ts : 실제 코드  
.d.ts : Type에대해서만 정의되어 있음. 직접 Type을 만들어야하는 경우 .d.ts를 만들어서 로딩해 사용  

<*이미 정의된 Type 읽는 방법*>

**npx**  
아래 두개가 동일하게 작동하지만 버전이 달라짐!  
npm install -g 했을 때는 package.json에 표기된 버전이 아니라 최신버전을 설치(오류 발생가능O)  
npx install 의 경우는 package.json에 표기된 버전을 설치  
```bash
npx install tsc 
npm install -g tsc 
```

**package.json vs package-lock.json.**  
package.json의 경우에는 버전이 "^3.4.7"식으로 앞에 ^가 붙어있음 -> 3.4.7 <= version < 4.0.0 으로 그 사이 버전들중 최신 버전을 install함  
package-lock.json은 ^가 없어 정확히 3.4.7버전을 다운받음 => 꼭 github에 올려야함.

**.js와 .ts를 동시에 띄웠을 때 error**
*tsconfig.json*
ts파일에대한 설정
