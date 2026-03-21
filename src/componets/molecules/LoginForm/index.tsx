import { useState } from "react" //hooks de react
import Button from "../../atoms/Button"
import Input from "../../atoms/Input"


const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // equivalente
    // let email = ""

    // const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {email = e.target.value}

    const hendleLogin = () => {
        console.log("login", email, "password", password)
    }

    return (
        <div>
            <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <Button label="Login" onClick={hendleLogin}/>
        </div>
    )
} 
export default LoginForm;
