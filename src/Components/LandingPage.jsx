import './LandingPage.css'
import UserLoginForm from "./UserLoginForm";

const LandingPage = ({users, handleNewUser}) => {
    return (
        <>
        <h2 id='LandingPageTitle'>Welcome to our Website :)</h2>
        <div id='LandingPageForms'>
        <UserLoginForm users={users} handleNewUser={handleNewUser} />
 

        </div>

        </>
    );
}
 
export default LandingPage;