Вход:                       `heroku container:login` 
Билд и отправление образа:  `heroku container:push web -a shibut-test-app`
Развёртывание :             `heroku container:release web -a shibut-test-app`
Логирование:                `heroku logs --tail -a shibut-test-app`

Хироку сам устанавливает какой порт давать для использования через передачу переменой среды выполнения `process.env.PORT`