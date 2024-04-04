import './LandingPage.css'
import UserLoginForm from "./UserLoginForm";
import UserRegisterForm from "./UserRegisterForm";

const LandingPage = ({users, handleNewUser}) => {
    return (
        <>
        <h2 id='LandingPageTitle'>Welcome to our Website :)</h2>
        <div id='LandingPageForms'>
        <UserRegisterForm users={users} handleNewUser={handleNewUser}/>
        <UserLoginForm users={users} handleNewUser={handleNewUser} />
 

        </div>

        </>
    );
}
 
export default LandingPage;