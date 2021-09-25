import { Route, Switch } from 'react-router';
import './App.scss';
import Articles from './components/articles/Articles';
import Header from './components/header/Header';
import SportNews from './components/sportNews/sportNews';
import TechnologyNews from './components/technologyNews/TechnologyNews';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Articles}></Route>
        <Route exact path="/sport" component={SportNews}></Route>
        <Route exact path="/technologies" component={TechnologyNews}></Route>
      </Switch>
    </div>
  );
}

export default App;
