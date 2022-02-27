import React from 'react';
import {Container,Form,Button} from 'react-bootstrap';
import '../css/login.css';
import Prueba from './Prueba';
import {Registrocss} from '../data/Registrocss';
import Registro from './Registro';


class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
    this.login = this.login.bind(this);
    this.inputUser=React.createRef();
    this.inputPass=React.createRef();  
    this.intentos=0
  }

  login() {
    this.setState({ user:this.inputUser.current.value , password: this.inputPass.current.value});
    localStorage.setItem('user',this.inputUser.current.value);
    localStorage.setItem('pass',this.inputPass.current.value);
    this.getName();
    this.getPassword();
    this.intentos=this.intentos+1;
  }

  getName(){
    return this.inputUser.current.value;
  }

  getPassword(){
    let namePass=this.inputPass.current.value;
    return namePass;
  }
  toRegistro(){
      return(<Registro/>)
    ;
    
  }

  render (){
    
    if (localStorage.getItem('user')===Registrocss.nombre && localStorage.getItem('pass')===Registrocss.password) {
      return (
        <div>
            <Prueba/>
        </div>
      );
    }else if(this.intentos>0 && localStorage.getItem('user')!==Registrocss.nombre && localStorage.getItem('pass')!==Registrocss.password){
      return (
        <Container>
          <header className="headerapp">
            <img className="tamañoImagen" alt="Logo" src="https://cdn.pixabay.com/photo/2021/02/16/06/00/youtube-logo-6019878_960_720.png" width='400px' height='300px' />
          </header>
          <Form className="formularioLogin">
            <div className="divForms">
            <Form.Group>
              <Form.Label ><label className="styleLabel">Nombre de usuario:&nbsp;</label></Form.Label>
              <Form.Control  type="text"  ref={this.inputUser} />
            </Form.Group>
            <br/>
            <Form.Group>
              <Form.Label><label className="styleLabel">Contraseña:&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</label> </Form.Label>
              <Form.Control type="password"   ref={this.inputPass} />
            <br/>
            </Form.Group>
            </div>
            <br/>
            <Button className="botonEnviar" variant="primary" type="button" onClick={this.login}>Enviar</Button>
          </Form>
          <label className="error">Usuario o contraseña incorrectos</label>
        </Container>
    );
    
    }else {
      return (
          <Container>
            <header className="headerapp">
              <img className="tamañoImagen" alt="Logo" src="https://cdn.pixabay.com/photo/2021/02/16/06/00/youtube-logo-6019878_960_720.png" width='400px' height='300px' />
            </header>
            <Form className="formularioLogin">
              <div className="divForms">
              <Form.Group>
                <Form.Label ><label className="styleLabel">Nombre de usuario:&nbsp;</label></Form.Label>
                <Form.Control  type="text"  ref={this.inputUser} />
              </Form.Group>
              <br/>
              <Form.Group>
                <Form.Label><label className="styleLabel">Contraseña:&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</label> </Form.Label>
                <Form.Control type="password"   ref={this.inputPass} />
              <br/>
              </Form.Group>
              </div>
              <br/>
              <Button className="botonEnviar" variant="primary" type="button" onClick={this.login}>Enviar</Button>
            </Form>
          </Container>
      );
    }
     
  }
}

export default Login;