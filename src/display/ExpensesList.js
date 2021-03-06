import React, { Component } from 'react'
import {BudgetConsumer} from '../store';
export class ExpensesList extends Component {
    render() {
        return (
            <div className="card mt-5">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    {/* <tbody> */}
                    <BudgetConsumer>
                        {value=>{
                            const expensesList=value.expenses.length>0?(
                                value.expenses.map((expense,index)=>{
                                    return (
                                        <tr>
                                            <td>{expense.title}</td>
                                            <td>{expense.amount}</td>
                                        </tr>
                                    )
                                })
                            ):(
                                <tr>
                                    <td>No Expenses till now</td>
                                </tr>
                            )
                            return <tbody>{expensesList}</tbody>
                        }}
                    </BudgetConsumer>
                    {/* </tbody> */}
                </table>
            </div>
        )
    }
}

export default ExpensesList
