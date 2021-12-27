import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './Components/Index';
import Navbar from './Components/Navbar';
import Overview from './Components/Overview';
import Music from './Components/Music';
import Videos from './Components/Videos';
import Entertainment from './Components/Entertainment';
import GiftCards from './Components/GiftCards';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
              <Index />
          </Route>
          <Route exact path='/overview'>
              <Overview />
          </Route>
          <Route exact path='/music'>
              <Music />
          </Route>
          <Route exact path='/videos'>
              <Videos />
          </Route>
          <Route exact path='/entertainment'>
              <Entertainment />
          </Route>
          <Route exact path='/giftcards'>
              <GiftCards />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
