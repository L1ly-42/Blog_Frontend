import { useState } from "react";

const UserLoginForm = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <p> Login Goes Here</p>
            <form>
                <label htmlFor="username-field">Username: </label>
                <input 
                    value={userName} 
                    name="username"
                    placeholder="Enter username"
                    id="username-field"
                    required
                    onChange={(event)=> {setUserName(event.target.value)}}
                />
                <label htmlFor="password-field">Password: </label>
                <input 
                    value={password} 
                    name="password"
                    placeholder="Enter password"
                    id="password-field"
                    required
                    onChange={(event)=> {setPassword(event.target.value)}}
                />
                <input 
                    type="Submit"
                    value="Submit"
                />
            </form>
        </>
    );
}
 
export default UserLoginForm;