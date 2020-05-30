import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import { render } from '@testing-library/react';
import Greetings from './components/Greetings'
class App extends Component {
  state={
    userA: {
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:'178',
  birth:"1992-07-14",
  picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  userB:{
  lastName:'Delores ',
  firstName:'Obrien',
  gender:'female',
  height:'172',
  birth:"1988-05-11",
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
  }

  }

  render(){
    
  return (
    <div className="App">
      <header className="App-header">

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <IdCard
  lastName={this.state.userA.lastName}
  firstName={this.state.userA.firstName}
  gender={this.state.userA.gender}
  height={this.state.userA.height}
  birth={this.state.userA.birth}
  picture={this.state.userA.picture}
/>
<IdCard
  lastName={this.state.userB.lastName}
  firstName={this.state.userB.firstName}
  gender={this.state.userB.gender}
  height={this.state.userB.height}
  birth={this.state.userB.birth}
  picture={this.state.userB.picture}
/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
