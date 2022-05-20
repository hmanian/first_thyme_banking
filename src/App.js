import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './pages/Profile';
//import PieChartPage from './pages/PieChartPage';
import Budget from './pages/Budget';
import Finances from './pages/Finances';
import Walc from './pages/Walc';
import Home from './pages/Home';
import Header from './Components/Header/Header.js';
import PieChartPage from './pages/PieChartPage';


function App() {
    return (
        <Router>
        <div className="App">
          <Header />
            <div className="Content">
                <Switch>
                    <Route exact path="/ ">
                        <Home />
                    </Route>
                    <Route exact path="/Budget">
                        <Budget />
                        <Route exact path="/PieChartPage">
                        <PieChartPage />
                        </Route>
                    </Route>
                    <Route exact path="/Profile">
                        <Profile />
                    </Route>
                    <Route exact path="/Finances">
                        <Finances />
                    </Route>
                    <Route exact path="/Walc">
                        <Walc />
                    </Route>
                    
                </Switch>
            </div>
        </div>
        </Router>
    );
}

export default App;
