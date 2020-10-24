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
### GuGuDan 구구단
