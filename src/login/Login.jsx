import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, signInWithEmailAndPassword} from "../../services/AuthServices"

const Login = () =>{
    const navigate = useNavigate();
    const [credentials,setCredentials] = useState({
        email:'',
        password:''
    })
    const handleChange = (e)=>{
        const value = e.target.value;
        setCredentials({
            ...credentials,
            [e.target.name]:value
        })
    }
    const submitHandler= (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(credentials.email, credentials.password)

    }
useEffect(()=>{
    if(loading) return;
    if(user) navigate('/works');

},[user,loading])
    return(
        <>
        <h2 className="mt-3 text-center">Registruokis</h2>
        <form onSubmit={submitHandler}></form>
        <div className="form">
            
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="el.pastas" />

            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="slaptazodis"/>
            </div>
            <div>
                <button type="submit">prisijungti</button>
            </div>
            <div className="mb-3">
                <p>Neturite paskyros ? <Link to="/register">Registruokites</Link></p>
            </div>
        </div>
        </>
    )
}
export default Login