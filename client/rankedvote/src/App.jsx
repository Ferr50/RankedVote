import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminConsole from './components/AdminConsole';
import Home from './components/Home';
import CastVote from './components/CastVote';
import CountVotes from './components/CountVotes';
import NewCampaign from './components/NewCampaign';
import Campaign from './components/Campaign';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/admin' component={AdminConsole} exact />
          <Route path='/' component={Home} exact />
          <Route path='/cast-vote' component={CastVote} exact />
          <Route path='/count-votes' component={CountVotes} exact />
          <Route path='/campanha/nova-campanha' component={NewCampaign} exact />
          <Route path='/campanha/ativa/:org/:name' component={Campaign} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
