/*
=======================================================
  Title: finance-calculator.js
  Author: Professor Krasso
  Date: 04/20/2021
  Modified by: Sarah Jean Baptiste
  Description: Finance Calculator
========================================================
*/

// Export class.
export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12; 
    static calculateFutureValue(monthlyPayment, rate, years){
    
        let month = years  * FinanceCalculator.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * month;
        let futureValue = presentValue * (Math.pow(interestRate, month));

        return futureValue.toFixed(2); //return value with two decimal points

    }
    // function to convert currency to USD.
    static convertToCurrency(field){ 
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });
    
        return currencyFormatter.format(field);
    }
    
}



