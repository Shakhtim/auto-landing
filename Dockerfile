# Этап сборки приложения
FROM node:14 as build

# Устанавливаем рабочую директорию
WORKDIR /auto-landing

# Копируем package.json и package-lock.json из папки src
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы из папки src
COPY src ./

# Собираем приложение (если необходимо)
RUN npm run build

# Этап для Nginx
FROM nginx:alpine

# Копируем собранные статические файлы из этапа сборки в Nginx
COPY --from=build /auto-landing/build /usr/share/nginx/html

# Копируем конфигурацию Nginx (при необходимости)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт, на котором будет работать Nginx
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
