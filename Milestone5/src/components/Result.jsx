import { calculateInvestmentResults,formatter } from "../util/investment.js";

export default function Result({input}){

    // console.log(input);

    const resultData=calculateInvestmentResults(input);

    // console.log(resultData);



    const initialInvestment=resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].anualInvestment; 

    return ( <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>Interest(year)</th>
                <th>Total Interest</th>
                <th>Interested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((yearData) =>{
                const totalInterest=yearData.valueEndOfYear - yearData.anualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested= yearData.valueEndOfYear - totalInterest;

                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    );
}