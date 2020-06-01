import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import {
  Container,
  Grid,
  Header,
  Icon,
} from 'semantic-ui-react';

import Home from './pages/Home/Home';
import Word from './pages/Word/Word';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Header as="h1" className="App__header">
            <Link to="/">
              <Icon name="book" />
              <Header.Content>美词汇</Header.Content>
            </Link>
          </Header>
        </Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/word/:id/:word" children={<Word />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
