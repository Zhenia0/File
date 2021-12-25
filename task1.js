const fs = require("fs");
console.log('start');
fs.readFile('fewWords.txt', 'utf8', function (err, data) {
    console.log("Чтение файла...")
    if (err) throw err;

    const strings = data.toString().split('\n');
    strings.forEach((el, index) => {
        if ((index + 1) % 2 === 0) {
            console.log(el);
        }
    });
});
console.log('finish');
