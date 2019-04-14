import React, { Component } from 'react';
import RevenueForm from './components/revenue-form/revenue-form';
import ExpenseForm from './components/expense-form/expense-form';
import TableRow from './components/expense-table/table-row'
import Projections from './components/projections/projections';

import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      revenues: [],
      expenses: [],
      revenueSum: 0,
      expenseSum: 0,
      rID: 0,
      eID: 0
    }

    this.revenueClick = this.revenueClick.bind(this);
    this.expenseClick = this.expenseClick.bind(this);
  }

  revenueClick(title, value){
    this.state.revenues.push({
      title: title,
      value: value,
      id: this.state.rID
    })
    this.setState({
      revenues:  this.state.revenues,
      revenueSum: this.state.revenueSum + parseInt(value),
      rID: this.state.rID +1
    })
  }

  expenseClick(title, value){
    this.state.expenses.push({
      title: title,
      value: value,
      id: this.state.eID
    })
    this.setState({
      expenses:  this.state.expenses,
      expenseSum: this.state.expenseSum + parseInt(value),
      eID: this.state.eID +1
    })
  }

  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" />
        <h1 className="app-title">Generic Monthly Budgeting App</h1>
        <div className="app-body">
          <div className="input-forms">
            <RevenueForm clickHandler={this.revenueClick}/>
            <ExpenseForm clickHandler={this.expenseClick} />
          </div>
          <div className="expense-table">
            <h2>Entries</h2>
            <table>
              <tbody>
                <tr>
                  <td><b>Item Title</b></td>
                  <td><b>Revenue Value</b></td>
                  <td><b>Expense Value</b></td>
                </tr>
                {this.state.revenues.map(function(revenue){
                  return (<TableRow key={'revenue'+revenue.id} title={revenue.title} value={revenue.value} type="revenue"/>)
                })}

                {this.state.expenses.map(function(expense){
                  return (<TableRow key={'expense'+expense.id} title={expense.title} value={expense.value} type="expense"/>)
                })}
                <tr>
                  <td></td>
                  <td className="revenue"><b>{this.state.revenueSum}</b></td>
                  <td className="expense"><b>{this.state.expenseSum}</b></td>
                </tr>
              </tbody>
            </table>
          </div>
          <Projections expenseSum={this.state.expenseSum} revenueSum={this.state.revenueSum}/>
        </div>
      </div>
    );
  }
}

export default App;
