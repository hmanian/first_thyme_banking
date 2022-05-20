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
        localStorage.setItem("monthlyIncome", document.getElementById('monthlyIncome').value);
        localStorage.setItem("monthlyExpenses1", document.getElementById('expenses').value);
        localStorage.setItem("monthlyExpenses1Selection", document.getElementById('addExpense').value);
        localStorage.setItem("monthlyExpenses2", document.getElementById('expenses1').value);
        localStorage.setItem("monthlyExpenses2Selection", document.getElementById('addExpense1').value);
        localStorage.setItem("monthlyExpenses3", document.getElementById('expenses2').value);
        localStorage.setItem("monthlyExpenses3Selection", document.getElementById('addExpense2').value);

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

                    <label for="name">Full Name</label>
                    <input name="name" onChange={handleChange} />
                    <br /><br />
                    <label for="user">Username</label>
                    <input name="user" onChange={handleChange} />
                    <br /><br />
                    <label for="monthlyIncome">Monthly Income</label>
                    <input type="number" name="monthlyIncome" id="monthlyIncome" onChange={handleChange} step="100"/>
                    <br /><br />

                <div className="selectAndInput">
                        <div className="monthlyExpenseDrop">
                                <label for="addExpense">Monthly Expense</label>
                                <select name="addExpense" id="addExpense" onChange={handleChange}>
                                <option value="">--Please choose an option--</option>
                                <option value="Rent">Rent</option>
                                <option value="Food">Food</option>
                                <option value="Gas">Gas</option>
                                <option value="Loans">Student Loans</option>
                                <option value="Other">Other</option>
                                </select>
                        </div>  
                
                        <div className="monthlyExpense">
                                <label for="expenses">Expense Amount</label>
                                <input type="number" name="expenses" id="expenses" onChange={handleChange} step="1"/>
                        </div>
                    </div>
                    <br />

                    <div className="selectAndInput">
                        <div className="monthlyExpenseDrop">
                                <label for='addExpense1'>Monthly Expense</label>
                                <select name="addExpense1" id="addExpense1" onChange={handleChange}>
                                <option value="">--Please choose an option--</option>
                                <option value="Rent">Rent</option>
                                <option value="Food">Food</option>
                                <option value="Gas">Gas</option>
                                <option value="Loans">Student Loans</option>
                                <option value="Other">Other</option>
                                </select>
                        </div>       

                        <div className="monthlyExpense">
                                <label for="expenses1">Expense Amount</label>
                                <input type="number" name="expenses1" id="expenses1" onChange={handleChange} step="1"/>
                        </div>
                </div>
                <br />

                <div className="selectAndInput">
                        <div className="monthlyExpenseDrop">
                                <label for="addExpense2">Monthly Expense</label>
                                <select name="addExpense2" id="addExpense2" onChange={handleChange}>
                                <option value="">--Please choose an option--</option>
                                <option value="Rent">Rent</option>
                                <option value="Food">Food</option>
                                <option value="Gas">Gas</option>
                                <option value="Loans">Student Loans</option>
                                <option value="Other">Other</option>
                                </select>       
                        </div>
                
                        <div className="monthlyExpense">
                                <label for="expenses2">Expense Amount</label>
                                <input type="number" name="expenses2" id="expenses2" onChange={handleChange} step="1"/>
                        </div>
                    </div>
                    <br /><br />

                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default Profile;
