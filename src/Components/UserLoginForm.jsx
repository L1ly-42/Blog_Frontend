import './UserLoginForm.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLoginForm = ({users, handleNewUser}) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [userId, setUserId] = useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
        if(userId !== null) {
            navigate(`/${userId}/all_blogs`);
        }
    },[userId])

    const handleSubmit = (event) => {
        event.preventDefault();
        handleValidation(userName, password);

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
            handleNewUser(users[userExistence].id);
        };
    
    };

    return (
        <div id='loginContainer'>

            <h3 id="loginTitle"> Login Here:</h3>

            <form id='loginForm' onSubmit={handleSubmit}>
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
                    type='password'
                    value={password} 
                    name="password"
                    placeholder="Enter password"
                    id="password-field"
                    required
                    onChange={(event)=> {setPassword(event.target.value)}}
                />
                <input id='loginButton'
                    type="Submit"
                    name="Submit"
                />
            </form>
        </div>
    );
}
 
export default UserLoginForm;