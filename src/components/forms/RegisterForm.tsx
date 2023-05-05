import { Link } from "react-router-dom";
import {
    Button,
    InputContainer,
    InputFields,
    InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
    email: string,
    firstName: string,
    lastName: string,
    password: string
}
function RegisterForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    console.log(errors)
    const onSubmit= (data:any)=> {console.log(data)}
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {/* Email field */}
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputFields
                    id="email"
                    type="email"
                    placeholder="your email"
                    {...register("email", { required: "Email is required" })}
                ></InputFields>
            </InputContainer>
            {/* First name + Last name */}
            <section className={styles.nameFieldRow}>
                <InputContainer>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <InputFields
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        {...register('firstName', {required: 'First name is required'})}
                    ></InputFields>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <InputFields
                        id="lastName"
                        type="text"
                        placeholder="Last name "
                        {...register('lastName', {required: 'Last name is required'})}
                    ></InputFields>
                </InputContainer>
            </section>
            {/* Password */}
            <InputContainer>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputFields
                    id="password"
                    type="password"
                    placeholder="Password "
                    {...register('password', {required: 'Password is required'})}
                ></InputFields>
            </InputContainer>

            <Button className={styles.button}>Create My Account</Button>

            <div className={styles.footerText}>
                <span>Already registered? </span>
                <Link to={"/login"}>
                    <span> Login</span>
                </Link>
            </div>
        </form>
    );
}

export default RegisterForm;
