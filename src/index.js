module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 != 0) {return false}
    if(str.length == 0) {return true}

    let counter = str.length;

    while (str.length > 0){
        
        for (let n = 0; n < bracketsConfig.length; n++){
            str = str.replace('' + bracketsConfig[n][0] + bracketsConfig[n][1], '')
        };

        if (str.length == counter) {return false}

        counter = str.length
    }               

    return true 
}
