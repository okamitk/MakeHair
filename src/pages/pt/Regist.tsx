import React, { useState } from 'react';
import ReactDOM from "react-dom";
import "./styles/login.css";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {Auth} from '../../firebase-config';
import Navbar from '../../assets/components/Navbar';
function Regist() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [user, setUser]:any = useState({});
    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            Auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error:any) {
          console.log(error.message);
        }
      };
    const logout = async () =>{
        await signOut(Auth)
    };
    onAuthStateChanged(Auth, (currentUser) => {
        setUser(currentUser);
      });
    if(user==null){
        return (
            <div className="content">
                <Navbar user={user?.email} ></Navbar>
                <div id="login" className='login'>
                    <h1 className="gradient_text">REGISTRO</h1>
                    <form className="form">
                        <div className="form__group field">
                            <input
                                type="input"
                                className="form__field" 
                                placeholder="E-mail" 
                                name="email" id='email'  
                                onBlur={(event) => {setRegisterEmail(event.target.value)}} 
                                required />
                            <label htmlFor="email" className='form__label'>Email</label>
                        </div>
                        <div className="form__group field">
                            <input type="password" 
                                className="form__field"
                                placeholder="Senha"
                                name="password"
                                onBlur={(event) => {setRegisterPassword(event.target.value)}}
                                required />
                            <label htmlFor="password" className="form__label">Senha</label>
                        </div>
                        <div className="actions">
                            <button type="submit" name="submit" onClick={register} value="login">REGISTRAR</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return(
            <div className="content">
            <Navbar user={user?.email} ></Navbar>
                <div id="login" className='login'>
                    <h1 className="gradient_text">LOGOUT</h1>
                    <div className="warning">
                        Você precisa sair da conta {user?.email} antes de se registrar ou fazer login novamente
                    </div>
                    <button type="submit" name="submit" onClick={logout} value="login">SAIR</button>
                </div>
            </div>
        )
    }
}

export default Regist