const audiohub = require ('audiohub');
const path = require ('path');
const clc = require('cli-color');

const audio = new audiohub;
 function Clip () {
     audio.play(path.resolve('./track1.ogg'));

    console.log(clc.blue.italic('Слушаем класическую музыку и наслаждаемся'));
 }

 Clip();
function text () {

    console.log(clc.black.bgGreen('Спасибо за прослушивание!!!!'));


}
setTimeout(text, 61000);