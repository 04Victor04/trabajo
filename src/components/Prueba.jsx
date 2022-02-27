import React from 'react';
import {Button} from 'react-bootstrap';
import Login from './Login';
import {Registrocss} from '../data/Registrocss';

class Prueba extends React.Component{
    
   logOut(){
       localStorage.removeItem('user');
       localStorage.removeItem('pass');
       window.location.reload()
   }

    render(){
        if (localStorage.getItem('user')===Registrocss.nombre && localStorage.getItem('pass')===Registrocss.password) {
            return(
                <div >
                    <Button  variant="primary" type="submit" onClick={this.logOut}>Log out</Button>  
                </div>
            );
        }else{
            <div>
                <Login/>
            </div>
            
        }
    }
}
export default Prueba; 