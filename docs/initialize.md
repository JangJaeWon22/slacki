# npm 초기화

npm init -y

# packages

npm install --save-dev nodemon
nodemon :

npm install express
express :

# require 대신 import 쓰고 싶을 때

package.json 최상단에 "type" : "module" 추가

# Git

## 브랜치 이름 변경

git branch -m [원래이름] [바꿀이름]

깃헙에서 main 브랜치 이름 바꿨을 경우
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a

## 커밋 컨벤션

- example
  TITLE : [tag]사용자 회원가입 API 수정
  [빈 줄]
  BODY : 상세 설명 필요할 경우 작성

- tag type

  | Tag name             | 내용                                                                      |
  | -------------------- | ------------------------------------------------------------------------- |
  | **Feat**             | 새로운 기능을 추가할 경우                                                 |
  | **Fix**              | 버그를 고친 경우                                                          |
  | **Design**           | CSS 등 사용자 UI 디자인 변경                                              |
  | **!BREAKING CHANGE** | 커다란 API 변경의 경우                                                    |
  | **!HOTFIX**          | 급하게 치명적인 버그를 고쳐야 하는 경우                                   |
  | **Style**            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                     |
  | **Refactor**         | 프로덕션 코드 리팩토링                                                    |
  | **Comment**          | 필요한 주석 추가 및 변경                                                  |
  | **Docs**             | 문서를 수정한 경우                                                        |
  | **Test**             | 테스트 추가, 테스트 리펙토링(프로덕션 코드 변경 X)                        |
  | **Chore**            | 빌드 테스트 업데이트 ,페키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) |
  | **Rename**           | 파일 혹은 폴더 명을 수정하거나 옮기는 작업인 경우                         |
  | **Remove**           | 파일을 삭제하는 작업만 수행한 경우                                        |
  | **Merged**           | 병합, 충돌 해결 시                                       |

## DB 생성과 연결

### Sequelize & MySQL

Sequelize를 이용하면 쿼리를 함수와 값으로 표현할 수 있어 텍스트로 쿼리를 직접 만드는 것 보다 코드를 작성하거나 읽기 더 쉬워지기 때문에 사용

Sequelize와 같은 ORM을 사용할 때 더 의미가 명확하기 때문에 사용

```jsx
npm i sequelize sequelize-cli mysql2

npx sequelize init
```
