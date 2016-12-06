var fs = require("fs");

var re = /<option value="(\d+)">\d+ - (.+?)<\/option>/ig;
var code = fs.readFileSync("./data.json").toString().trim();

var a = [];
code.replace(re, function (_,sn,name) {
    a.push({sn,name:name.trim()});
});
var code2 = JSON.stringify(a,null,4);
fs.writeFileSync("bank.json", code2);