import RegisterForm from "../components/forms/RegisterForm";
import { Page } from "../utils/styles";

function RegisterPage() {
    return (
        <Page display="flex" alignItems="center" justifyContent="center">
            <RegisterForm />
        </Page>
    );
}

export default RegisterPage;
