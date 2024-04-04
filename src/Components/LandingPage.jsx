import UserLoginForm from "./UserLoginForm";
import UserRegisterForm from "./UserRegisterForm";

const LandingPage = ({users, handleNewUser}) => {
    return (
        <>
            <UserLoginForm />
            <UserRegisterForm />
        </>
    );
}
 
export default LandingPage;