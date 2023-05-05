import { Link } from "react-router-dom";
import {
    Button,
    InputContainer,
    InputFields,
    InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    email: string;
    password: string;
};
function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    console.log(errors)
    const onSubmit = (data:any) => console.log(data);
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {/* Email field */}
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputFields
                    id="email"
                    type="email"
                    placeholder="your email "
                    {...register("email", { required: "Email is required" })}
                ></InputFields>
            </InputContainer>

            {/* Password */}
            <InputContainer className={styles.loginFormPassword}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputFields
                    id="password"
                    type="password"
                    placeholder="Password "
                    {...register("password", { required: "Password is required" })}
                ></InputFields>
            </InputContainer>

            <Button>Login</Button>
            <div className={styles.footerText}>
                <span>Don't have an account? </span>
                <Link to={"/register"}>
                    <span> Sign Up</span>
                </Link>
            </div>
        </form>
    );
}

export default LoginForm;
