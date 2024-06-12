В приложении две ветки main и gh-pages. Разница между двумя ветками в том, что в main лежит приложение которое пытается сделать запросы к backend, а в gh-pages они замоканы. Версия мain в redux импортирует /AJAX/index1.js, а Версия gh-pages /AJAX/index.js.
Для установки правильного адреса запроса нужно установить  в переменную urlMain из файла /AJAX/index1.js ip адрес сервера

Установка/Install
Требования/Requirements
Для сборки и запуска проекта необходимо иметь/To build and run the project you must have:

Node v16.20.2 or latest. Installation instructions.
Docker compose v2.21.0 or latest. Installation instructions.
Сборка/Assembly
Клонировать репозиторий/Clone repository

В корне скачанного репозитория исполнить/In the root of the downloaded repository, execute: npm install

В корне скачанного репозитория исполнить/In the root of the downloaded repository, execute: npm run build

Запуск/Launch
В корне скачанного репозитория исполнить/In the root of the downloaded repository, execute docker-compose up
Собранное приложение будет запущенно по адресу http://localhost:80 / The assembled application will be launched at http://localhost:80

Github-pages
Cсылка на Github-pages/Link to Github-pages: https://github.com/Solodkih/test_task. 
