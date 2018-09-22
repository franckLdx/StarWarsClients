import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Container from 'reactstrap/lib/Container';
import Navigation from './navigation';
import { Router } from './router';

class App extends React.Component {
  public render() {
    return (
      <Container fluid={true}>
        <Navigation />
        <Router />
      </Container>
    );
  }
}

export default App;
