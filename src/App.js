import React from react;
import './App.css';
import Login from './components/Login';
import {Container} from 'react-bootstrap';

function App() {
  return (
    
      <Container className="divLogin">
        <Login />
      </Container>
  );
}

export default App;