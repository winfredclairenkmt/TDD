// Edwin and Claire

class Factorial{
    factorial(num){
        if(num === 0){
            return 1
        }
        else if(num < 0){
            return 'Undefined (Factorial is not defined for negative numbers)';
        }
        else{
            let result = 1
            for(let i = 1; i <= num; i++){
                result = result * i
            }
            return result
        }
       
    }
}

module.exports =  Factorial;