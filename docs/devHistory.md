## 2022.01.05

- 1. 환경 변수 설정 오류

이상하게 node를 종료하고 그 다음 npm run dev는 실행이 되는데, 소스 저장을 하고 nodemon이 한번 실행되면 포트가 이미 사용중이라는 에러 메세지를 받았다.

app.listen 포트 부분에 직접 정수를 넣어 실행하니 정상 작동하는 걸 확인했다.

어떻게 확인했는지 기억은 안 나는데, process.env.SERVER_PORT가 string이었다는걸 알게 되었다.

.env 확인해보니, SERVER_PORT=3030; 으로 되어 있었다.

;때문에 이를 문자열로 인식한 듯 하다. 3030; 을 3030으로 바꿔주니 정상 작동한다.

## 2022.01.10

 - 1. eslint 초기설정 불량 에러
    - import/export 오류
    - module.exports error
    - export default error
    - prettier error 미확인
    등 의 문제로 모듈 재설정.. 뒤죽박죽 설정이다 보니, 정확하게 어떤게 룰이고 파악이 안됨.

 - 2. Husky 설정
    - git commit 시 eslint 검사 해주게 설정. 
    - husky만 사용한다면 프로젝트 내의 모든 코드를 검사하기 때문에 비효율 적
        - lint-staged는 git에 staged 상태인 파일만 lint 해주는 도구입니다.

    |설정 명령|설정 설명|
    |---|---|
    |pre-commit|커밋 메시지를 작성하기 전에 호출됨|
    |prepare-commit-msg|커밋 메시지 생성 후 편집기 실행 전에 호출됨|
    |commit-msg|커밋 메시지와 관련된 명령을 넣을 때 호출됨|
    |post-commit|커밋이 완료되면 호출됨|
    |pre-push|푸시가 실행되기 전에 호출됨|
 
   - 실행 방법
      - commit을 해보자.!
   
