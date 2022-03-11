

class Calculator  {
    constructor(secondOperandTextElement,curentOperandTextElement){
        this.secondOperandTextElement = secondOperandTextElement;
        this.curentOperandTextElement = curentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = "",
        this.secondOperand = "",
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);

    }

    appendNumber(number){
        if (number === "." && this.currentOperand.includes('.')) return;
        if (number === "0" && this.currentOperand.includes('0')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        
        
    }

    choiseOperation(operation){
        if (this.currentOperand === "") return;
        if (this.secondOperand !== ''){
            this.compute();
        }

        this.operation = operation;
        this.secondOperand = this.currentOperand.toString() + " " + this.operation;
        this.currentOperand = "";
        
    }

    compute(){
        let result ;
        const second = parseFloat(this.secondOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(second) || isNaN(current)) return;

        switch (this.operation.toString()){

            case '+' : 
                result = second+current;
            break;
            
            case '-' : 
                result = second-current;
            break;

            case '*' : 
                result = second*current;
            break;

            case '÷' :
                result = second/current;

            default :
                return;
        }

        this.currentOperand = result;
        this.operation = undefined;
        this.secondOperand = ''

    }

    updateDisplay(){
        // if (this.operation != null){
        //     this.secondOperandTextElement.innerText = `${this.secondOperand} ${this.operation.toString()}`;
        // }
        
        this.curentOperandTextElement.innerText = this.currentOperand;
        this.secondOperandTextElement.innerText = this.secondOperand;
        
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operations]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const secondOperandTextElement = document.querySelector('[data-second-operand]');
const curentOperandTextElement = document.querySelector('[data-curent-operand]');



const calculator = new Calculator(secondOperandTextElement,curentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})


operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.choiseOperation(button.innerText);
        console.log(calculator.currentOperand);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button =>{

    calculator.compute();
    calculator.updateDisplay();

})

allClearButton.addEventListener('click', button =>{

    calculator.clear();
    calculator.updateDisplay();

})

deleteButton.addEventListener('click', button =>{

    calculator.delete();
    calculator.updateDisplay();

})
