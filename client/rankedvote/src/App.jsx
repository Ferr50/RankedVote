import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CastVote from './components/CastVote';
import CountVotes from './components/CountVotes';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/cast-vote' component={CastVote} exact />
          <Route path='/count-votes' component={CountVotes} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
