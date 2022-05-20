import React from 'react'
import './PieChartPage.css';
import PieChartGraph from './PieChartGraph';
import Budget from './Budget';
import { Link, Route } from "react-router-dom";




function PieChartPage() {
  return (
    <div className="PieChart">
      <h1> Hello World!</h1>
      <p>hello</p>
      <div className="container">
        <PieChartGraph />
      </div>

    <Route path="./Budget" component={Budget} />
    <Link to="./Budget"><button>Go to Budget</button></Link>
  
    </div>
  );
}

export default PieChartPage;
