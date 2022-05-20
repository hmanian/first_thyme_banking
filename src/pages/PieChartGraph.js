import { Pie } from 'react-chartjs-2';

function PieChartGraph() {

var monthlyIncome = localStorage.getItem("monthlyIncome");
var monthlyExpenses1 = localStorage.getItem("monthlyExpenses1");
var monthlyExpenses2 = localStorage.getItem("monthlyExpenses2");
var monthlyExpenses3 = localStorage.getItem("monthlyExpenses3");
var monthlyExpenses1Selection = localStorage.getItem("monthlyExpenses1Selection");
var monthlyExpenses2Selection = localStorage.getItem("monthlyExpenses2Selection");
var monthlyExpenses3Selection = localStorage.getItem("monthlyExpenses3Selection");

var remainingMoney = monthlyIncome - monthlyExpenses1 - monthlyExpenses2 - monthlyExpenses3;
var spendingTarget = localStorage.getItem("spendingTarget");
localStorage.setItem("remainingMoney", remainingMoney);

const data = {
    labels: ['Mon','Tue','Wed','Thurs','Fri'],
    datasets: [
        {
            label: 'Your Monthly Expenses',
            data: [monthlyExpenses1,monthlyExpenses2,monthlyExpenses3,spendingTarget, remainingMoney-spendingTarget],
            borderColor: ['rgba(175,71,156,0.2)'],
            borderWidth:5,
            backgroundColor: ['rgba(232,99,132,1)',
            'rgba(232,211,6,1)',
            'rgba(54,162,235,1)',
            'rgba(255,159,64,1)',
            'rgba(153,102,255,1)' ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
            backgroundImage: 'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center'
        }
        
    ]
}

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Pie Chart',
            color:'blue',
            font: {
                size:34
            },
            padding:{
                top:30,
                bottom:30
            },
            animation:{
                animateScale: true
            }
        }
    }
    
}
    return (
        <div>
           <Pie data={data} options={options} />
        </div>
    )
}

export default PieChartGraph;