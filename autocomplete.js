exports.data = [];
exports.matchData = [];

exports.options = {
    limit: 10
};

exports.getLine = function(item){
    return item;
};

//检查匹配
exports.chkMatch = function(input){
    this.input = input;
    var key = input.value.trim().toLowerCase();
    this.matchData = [];
    if(key!="") {
        var keys = this.keys;
        var Fun = function (item) {
            if (keys) {
                return keys.some(x=>item[x].toLowerCase().startsWith(key));
            }
            return item.toLowerCase().startsWith(key);
        };
        this.matchData = this.data.filter(Fun).slice(0, 10);
        log({matchData: this.matchData});
    }
    if(this.matchData.length==0){
        this.hide();
    }else {
        this.render();
        this.show();
    }
};

exports.addToInput = function(index){
    this.input.value = this.getLine(this.matchData[index]);
    this.hide();
};