module.exports = function toReadable (number) {
    var numStr = number.toString();
    var oneDigitVariable = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var twoDigitVariable = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var dozenVariable = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    var result;
    if (number < 10) {
        return oneDigitVariable[number]
    }
    else if (number < 100 && number < 20) 
    {
        return twoDigitVariable[number-10]
    }
    else if (number < 100 && number >= 20) 
    {
        result = `${dozenVariable[Number(numStr[0]-2)]}`;
        if (Number(numStr[1]) === 0) {return result}
        result += ` ${oneDigitVariable[Number(numStr[1])]}`;
        return result
    }
    else {
        result = `${oneDigitVariable[Number(numStr[0])]} hundred`;
        if (Number(numStr[1]) === 0 ) {
            if (Number(numStr[2]) === 0 ) {return result}
            else {
                result += ` ${oneDigitVariable[Number(numStr[2])]}`;
            }
        }
        else if (Number(numStr[1]) >= 2) 
        {
            result += ` ${dozenVariable[Number(numStr[1]-2)]}`;
            if (Number(numStr[2]) === 0) {return result}
            result += ` ${oneDigitVariable[Number(numStr[2])]}`;
        }
        else 
        {
            result += ` ${twoDigitVariable[Number(numStr[1]+numStr[2])-10]}`
        }
        return result
    }
}
