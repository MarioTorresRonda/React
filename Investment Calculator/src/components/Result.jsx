import { formatter } from "../util/investment.js"

export default function Result( { resultObj } ) {

    let initialInvestment = 0;
    if ( resultObj.length > 0 ) {
        initialInvestment = resultObj[0].valueEndOfYear - resultObj[0].interest - resultObj[0].annualInvestment
    }

    return(
        <table id="result" >
            <thead>
                <tr>
                    <th> Year </th>
                    <th> Investment Value </th>
                    <th> Interest (Year) </th>
                    <th> Total Interest </th>
                    <th> Inveset Capital </th>
                </tr>
            </thead>
            <tbody>
                { resultObj.map( (row) => { 
                    var totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment
                    
                    return (
                    <tr>
                        <td> {row.year} </td>
                        <td> { formatter.format( row.valueEndOfYear ) } </td>
                        <td> { formatter.format( row.interest ) } </td>
                        <td> { formatter.format( totalInterest ) } </td>
                        <td> { formatter.format( row.valueEndOfYear - totalInterest ) } </td>
                    </tr> 
                ) } ) }
            </tbody>
        </table>
    )
}