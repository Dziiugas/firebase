import {Form, Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices"
const Register =()=>{  

    const [RegisterInfo, setRegisterInfo] = useState ({
        name:'',
        email:'',
        password:''


    })
    const [user,loading,error] = useAuthState(auth);
    const navigate = useNavigate();
    const handleChange = (e)=>{
        const value = e.target.value;
        setRegisterInfo({
            ...RegisterInfo,
            [e.target.name]:value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(RegisterInfo)
        registerWithEmailAndPassword(RegisterInfo.name,RegisterInfo.email,RegisterInfo.password)
       
    }


    useEffect(()=>{
        if(loading) return;
        if(user) navigate('/')

    },[user,loading])
    return(
        <>
        <h2 className="mt-3 text-center">Registruokis</h2>
        <form onSubmit={submitHandler}></form>
        <div className="form">
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Jusu vardas" />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="el.pastas" />

            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="slaptazodis"/>
            </div>
            <div>
                <button type="submit">registruotis</button>
            </div>
            <div className="mb-3">
                <p>turite paskyra ? <Link to="/">galite prisijunkti</Link></p>
            </div>
        </div>
        </>
    )
}

export default Register