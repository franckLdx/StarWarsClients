import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Navigation from './navigation';
import Routes from './routes';

class App extends React.Component {
  public render() {
    return <>
      <Navigation />
      <Routes />
    </>;
  }
}

export default App;
