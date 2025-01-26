describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвет кнопки восс. пароль

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авт.вижу текст
         cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
        })


        it('Верный логин и неверный логин', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвет кнопки восс. пароль
   
            cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
            cy.get('#pass').type('iLoveqastudio3'); // ввели неверный пароль
            cy.get('#loginButton').click(); // нажал войти
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авт.вижу текст
            cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
           })
             
           
        it('Проверка, что в логике есть @', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвет кнопки восс. пароль
   
            cy.get('#mail').type('germandolnikov.ru'); // ввели логи без @
            cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
            cy.get('#loginButton').click(); // нажал войти
   
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после авт.вижу текст
            cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
           })
    


           it('Проверка восстановления пароля', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвет кнопки восс. пароль
               
            cy.get('#forgotEmailButton').click();// нажимаю восстановить пароль

            cy.get('#mailForgot').type('german@dolnikov.ru'); //ввел почту для восстановления
            cy.get('#restoreEmailButton').click(); // нажал отправить код

            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю на совп. текста
            cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
           })

           it('Верный логин GerMan@Dolnikov.ru и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка цвет кнопки восс. пароль
   
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин
            cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
            cy.get('#loginButton').click(); // нажал войти
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авт.вижу текст
            cy.get('#messageHeader').should('be.visible');  // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
           })


  })