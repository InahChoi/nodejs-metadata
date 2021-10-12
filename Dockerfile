# 기반이 되는 이미지
FROM node:14

# 앱에 필요한 의존성 설치
COPY package*.json ./

# 앱 소스
COPY . .

# PORT
EXPOSE 3000

# 프로덕션 코드 빌드
RUN npm install

# CMD ["npm", "run", "start"]
CMD ["node", "dist/app.js"]
