import React from 'react';
import './App.css';
import { getData } from './services/api-helper';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import Body from './components/Body';
import ArtistDetails from './components/ArtistDetails';

class App extends React.Component {
  state = {
    something: [],

  }
  handleChange = (event) => {
    //dosomething
    //this.setState({ something })
  }

  componentDidMount = async () => {
    //const something = await getData();
    //this.setState({ something });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    //do domething
  }

  render() {
    return (
      <div className="app" >
        <Header />
        <Route exact path="/" render={() => (<Body
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />)}
        />
        <Route path="/artists" render={() => (<ArtistDetails />)} />
        <Footer />
      </div>
    );
  }
}

export default App;
