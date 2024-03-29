# Node.js 이미지를 베이스로 사용
FROM node:alpine

# 작업 디렉터리 설정
WORKDIR /app

# package.json과 yarn.lock 파일 복사
COPY package.json yarn.lock ./

# 의존성 설치
RUN yarn install

# 나머지 애플리케이션 파일들을 컨테이너로 복사
COPY . .

# 빌드
RUN yarn build

# 런타임 이미지 선택
FROM nginx:alpine

# 빌드 파일을 Nginx 서버의 루트 디렉터리로 복사
COPY --from=0 /app/build /usr/share/nginx/html

# 80 포트 열기
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]