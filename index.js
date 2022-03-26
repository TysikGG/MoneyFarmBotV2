const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message',  message => {
let messages = ["эх", "как у вас дела?", "скок стоит катана +12?", "ээм", "а лол что?", "чт...", "Хо хо хо. Уеs", "все ку", "чеел", "что", "а понимаю", "кто ещё в 2022 играет в самп кек", "да", "нет", "ладно", "втф", "я дед инсайд", "жигули", "у меня в бравле 20к :sunglasses:", "я легенда"]; // Массив с сообщениями  бота
let randomNumber = Math.floor(Math.random() * messages.length); // рандом-генерация фразы из массива
if(!message.channel.id == `693825169592156240`) return;
let random = Math.floor(Math.random() * 100)
    if (message.author.id == "943098563271983124") return;
    if(random < 15){ // 15 - стандартный шанс на отправку сообщения
        setTimeout(function(){
        message.channel.send(messages[randomNumber])
    },1000 * 10) // задержка
    
}})

bot.login("");



