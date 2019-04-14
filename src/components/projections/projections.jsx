import React, { Component } from 'react';

class Projections extends Component {
    constructor(props){
        super(props);
        this.state = {
            expenseSum: this.props.expenseSum,
            revenueSum: this.props.revenueSum
        }
    }
    
    componentWillReceiveProps(newProps){
      this.setState({
        expenseSum: newProps.expenseSum,
        revenueSum: newProps.revenueSum
      })
    }
    
    render() {
      return (
        <div className="projections">
            <h2 className="projections-title">Projections</h2>
            <p>Monthly Savings: {this.props.revenueSum - this.props.expenseSum}</p>
            <p>Annual Savings: {(this.props.revenueSum - this.props.expenseSum) * 12}</p>
        </div>
      );
    }
  }

export default Projections;