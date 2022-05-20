import React, { useReducer, useState } from 'react';
import "./Profile.css";

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
}


/*function newMonthlyExpense() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
    }
    
    
}*/

var monthlyIncomeInput = 0;
//const Profile = () => {
function Profile() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem("monthlyIncome", event.target.elements[3].value);
        localStorage.setItem("monthlyExpenses1", event.target.elements[6].value);
        localStorage.setItem("monthlyExpenses1Selection", event.target.elements[5].value);
        localStorage.setItem("monthlyExpenses2", event.target.elements[9].value);
        localStorage.setItem("monthlyExpenses2Selection", event.target.elements[8].value);
        localStorage.setItem("monthlyExpenses3", event.target.elements[12].value);
        localStorage.setItem("monthlyExpenses3Selection", event.target.elements[11].value);

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

    

    return(
        <div className="wrapper">
            <h1>Profile</h1>
            {submitting &&
                <div>Submitting Form...</div>
            }
            <form onSubmit={handleSubmit}>
                <fieldset>
                <label>
                    <p>Full Name</p>
                    <input name="name" onChange={handleChange} />
                    <p>Username</p>
                    <input name="userName" onChange={handleChange} />
                    <p>Monthly Income</p>
                    <input type="number" name="monthlyIncomeName" onChange={handleChange} step="100"/>
                </label>
               
                <fieldset>
                
                <label>
                <p>Monthly Expense</p>
                <select name="addExpense1" onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="Rent">Rent</option>
                    <option value="Food">Food</option>
                    <option value="Gas">Gas</option>
                    <option value="Loans">Student Loans</option>
                    <option value="Other">Other</option>
                </select>
                    <p>Expense Amount</p>
                    <input type="number" name="expenses1" onChange={handleChange} step="1"/>
                </label>
                </fieldset>
                
                <fieldset>
                <label>
                <p>Monthly Expense</p>
                <select name="addExpense2" onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="Rent">Rent</option>
                    <option value="Food">Food</option>
                    <option value="Gas">Gas</option>
                    <option value="Loans">Student Loans</option>
                    <option value="Other">Other</option>
                </select>
                    <p>Expense Amount</p>
                    <input type="number" name="expenses2" onChange={handleChange} step="1"/>
                </label>
                </fieldset>
                <fieldset>
                <label>
                <p>Monthly Expense</p>
                <select name="addExpense3" onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="Rent">Rent</option>
                    <option value="Food">Food</option>
                    <option value="Gas">Gas</option>
                    <option value="Loans">Student Loans</option>
                    <option value="Other">Other</option>
                </select>
                    <p>Expense Amount</p>
                    <input type="number" name="expenses3" onChange={handleChange} step="1"/>
                </label>
                </fieldset>
                </fieldset>


                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default Profile;
