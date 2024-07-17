import { LightningElement } from 'lwc';

export default class BMICalculator extends LightningElement {
    height = ''
    weight = ''
    bmiValue = 0
    result = ''
    changeHandler(event){
        const{name,value} = event.target
        this[name] = value
    }

    submitHandler(event){
        event.preventDefault()
        this.calculate()
        console.log(this.height, this.weight)
        console.log(this.result)
    }

    calculate(){
        const height = Number(this.height)/100
        const bmi = Number(this.weight/(height*height))
        this.bmiValue = Number(bmi.toFixed(2))
        
        console.log(this.bmiValue)

        if(this.bmiValue < 18.5){
            this.result = 'Underweight'
        }
        else if(this.bmiValue >= 18.5 && this.bmiValue <= 25.0){
            this.result = 'Healthy'
        }
        else if(this.bmiValue >= 25.0 && this.bmiValue <= 29.0){
            this.result = 'Overweight'
        }
        else{
            this.result = 'Obese'
        }
    }
    
    recalculateHandler(){
        this.height = ''
        this.result = ''
        this.weight = ''
        this.bmiValue = 0
    }
}
