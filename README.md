# vk-crypto-game
Node.JS библиотека для взаимодействия с мини-приложением Crypto во ВКонтакте.
# Установка
```
$ npm i vk-crypto-game
```
# Использование
```js
const Crypto = require('vk-crypto-game');
const crypto = new Crypto();
```
# Примеры
**Получение баланса пользователя игры**
```js
const Crypto = require('vk-crypto-game');
const crypto = new Crypto();

(async () =>{
    const result = await crypto.transfer(594328860)
    console.log(result)
})()
```
# Методы
Все методы находятся в index.js
