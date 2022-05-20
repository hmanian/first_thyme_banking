import React, { useReducer, useState } from "react";
import './Budget.css'

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
}

//const Budget = () => {
function Budget() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);


    var monthlyIncome = localStorage.getItem("monthlyIncome");
    var monthlyExpenses1 = localStorage.getItem("monthlyExpenses1");
    var monthlyExpenses2 = localStorage.getItem("monthlyExpenses2");
    var monthlyExpenses3 = localStorage.getItem("monthlyExpenses3");
    var monthlyExpenses1Selection = localStorage.getItem("monthlyExpenses1Selection");
    var monthlyExpenses2Selection = localStorage.getItem("monthlyExpenses2Selection");
    var monthlyExpenses3Selection = localStorage.getItem("monthlyExpenses3Selection");

    var remainingMoney = monthlyIncome - monthlyExpenses1 - monthlyExpenses2 - monthlyExpenses3;
    localStorage.setItem("remainingMoney", remainingMoney);


    const handleSubmit = event => {
        event.preventDefault();
        event.preventDefault();
        //localStorage.setItem("spendingTarget", event.target.elements[1].value);
        //console.log(event.target.elements[1].value);
    
        localStorage.setItem("spendingTarget", event.target.elements[1].value);
    
    setSubmitting(true);

    setTimeout(() => {
        setSubmitting(false);
    }, 500)
    }

    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
    }
    
    //<p> You currently have document.write(remainingMoney)  </p>
    
    /*<PieChart
        data={[
            { title: monthlyExpenses1Selection, value: monthlyExpenses1, color: '#E38627' },
            { title: monthlyExpenses2Selection, value: monthlyExpenses2, color: '#C13C37' },
            { title: monthlyExpenses3Selection, value: monthlyExpenses3, color: '#6A2135' }//,
            //{ title: 'Spending Budget', value: spendingTarget, color: '#6A2135' },
            //{ title: 'Money Saved', value: remainingMoney - spendingTarget, color: '#6A2135' }
        ]}
    />;*/

    /*<p>You currently have $<span id="rem"></span></p>
        <script>
        let rem = 40;
        document.getElementById("rem").innerHTML = rem;
        </script>
    <p>Spending Target</p>*/
    /*
    <p>You have $<span id="moneySaved"> left</span></p>
        <script>
        let moneySaved = remainingMoney - spendingTarget;
        document.getElementById("moneySaved").innerHTML = moneySaved;
        </script>
    */
    
    

    return (

        <div className="Budget">
            <h1>Personalized Budgeting</h1>

            <p>You currently have ${remainingMoney}</p>
            {submitting &&
                <div>Submitting Form...</div>
            }
            <form onSubmit={handleSubmit}>
                <input type="number" name="spendingTarget" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>

            <script>
            <fieldset>
                <label>
                <p>You currently have ${remainingMoney - "spendingTarget"} left</p>
                </label>
            </fieldset>
            </script>

            <div id="my-pie-chart"> </div>
            <p></p>
            <button onclick="./PieChartPage">Go to Pie Chart</button>
        
        </div>
        
       
    );
}

export default Budget;
