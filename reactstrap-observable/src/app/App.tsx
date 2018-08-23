import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Container from 'reactstrap/lib/Container';
import Navigation from './navigation';
import Routes from './routes';

class App extends React.Component {
  public render() {
    return <Container fluid={true}>
      <Navigation />
      <Routes />
    </Container >;
  }
}

export default App;
