import React, { useState } from 'react';
import "./styles/login.css";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {Auth} from '../../firebase-config';
import Navbar from '../../assets/components/Navbar';
function Login() {

    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [user, setUser]:any = useState({});
    onAuthStateChanged(Auth, (currentUser) => {
        setUser(currentUser);
    });
    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log('submit',{name,password})
    }
    const register = async () =>{
        try{
            const user = await createUserWithEmailAndPassword(Auth,email,password)
            console.log(user)
        } catch (error:any) {
            console.log(error.message);
        }
    };
    const logout = async () =>{};
    if(user==null){
        return (
            <div className="content">
                <Navbar user={user?.email} ></Navbar>
                <div id="login" className='login'>
                    <h1 className="gradient_text">REGISTRO</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form__group field">
                            <input
                                type="input"
                                className="form__field" 
                                placeholder="E-mail" 
                                name="email" id='email' 
                                value={email} 
                                onChange={(userevent) => setEmail(userevent.target.value)} 
                                required />
                            <label htmlFor="email" className='form__label'>Email</label>
                        </div>
                        <div className="form__group field">
                            <input type="password" 
                                className="form__field"
                                placeholder="Senha"
                                name="password"
                                id='password'
                                value={password} 
                                onChange={(passevent) => setPassword(passevent.target.value)}
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
    }
}

export default Login