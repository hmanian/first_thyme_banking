import "./Walc.css";
import { render } from 'react-dom'
import React, { useReducer, useState } from 'react';

var data = [
    { Category: localStorage.getItem("addExpense"), AmountSpent: localStorage.getItem("my-input")},
    { Category: "Entertainment", AmountSpent: 47.21},
    { Category: "Other", AmountSpent: 20.25},
]
const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
}

function Walc() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem("addExpense", event.target.elements[0].value);
        console.log(event.target.elements[0].value);
        localStorage.setItem("my-input", event.target.elements[1].value);
        console.log(event.target.elements[1].value)
        var data = [
            { Category: localStorage.getItem("addExpense"), AmountSpent: event.target.elements[1].value},
            { Category: "Entertainment", AmountSpent: 47.21},
            { Category: "Other", AmountSpent: 20.25},
        ]

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
    const [state, setState] = useState('')
    return (
        <><div>
            <h1>Budget Journal</h1>
            {submitting &&
                <div>Submitting Form...</div>
            }
            <form onSubmit={handleSubmit}>
                <label> Expense:  </label>
                <select name="addExpense" onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
                <p></p>
            <label htmlFor={'my-input'}>Enter amount spent: </label>
            <input
                id={'my-input'}
                type={'number'}
                value={state}
                placeholder={'Type here'}
                onChange={event => { 
                    setState(event.target.value);
                } } />
            <br /> 
            <br />
            You entered: {state}   
            <p></p>
            <button type="submit">Submit</button>
            </form>
        </div><div className="Walc">
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Amount Spent</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.Category}</td>
                                <td>{val.AmountSpent}</td>
                            </tr>
                        );
                    })}
                </table>
            </div></>
   );
}
export default Walc;
