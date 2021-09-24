import { Route, Switch } from 'react-router';
import './App.scss';
import Articles from './components/articles/Articles';
import Header from './components/header/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Articles}></Route>
      </Switch>
    </div>
  );
}

export default App;
