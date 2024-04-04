import './UserLoginForm.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLoginForm = ({users, handleNewUser}) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [userId, setUserId] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        handleValidation(userName, password);

        if(isValid){
            handleNewUser(userId);
            console.log(userId);
            navigate(`/${userId}`);
        }
    }

    const handleValidation = (username, password) => {
        const userExistence = users.findIndex(user =>
            user.name === username);
        

        const passwordExistence = users.findIndex(user =>
            user.password === password
        );
        if(userExistence !== -1 && passwordExistence !== -1){
            setIsValid(true);
            setUserId(users[userExistence].id);
        };
    
    };

    return (
        <div id='loginContainer'>

            <h3> Already Registered?</h3>
            <form id='loginForm'onSubmit={handleSubmit}>
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
                    name="Submit"
                />
            </form>
        </div>
    );
}
 
export default UserLoginForm;