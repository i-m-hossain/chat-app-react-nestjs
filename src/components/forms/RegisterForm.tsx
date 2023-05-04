import { Button, InputContainer, InputFields, InputLabel } from "../../utils/styles";
import styles from "./index.module.scss";

function RegisterForm() {
    return (
        <form className={styles.form}>
            {/* Email field */}
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputFields
                    id="email"
                    type="email"
                    placeholder="your email "
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
                    ></InputFields>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <InputFields
                        id="lastName"
                        type="text"
                        placeholder="Last name "
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
                ></InputFields>
            </InputContainer>

            <Button className={styles.button}>Create My Account</Button>
        </form>
    );
}

export default RegisterForm;
