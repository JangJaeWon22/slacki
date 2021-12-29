# bulletin-reboot

# 프로젝트 초기화

## npm 초기화

npm init -y

## packages

npm install --save-dev nodemon
nodemon :

npm install express
express :

## require 대신 import 쓰고 싶을 때

package.json 최상단에 "type" : "module" 추가

## Git

브랜치 이름 변경
git branch -m [원래이름] [바꿀이름]

깃헙에서 main 브랜치 이름 바꿨을 경우
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
