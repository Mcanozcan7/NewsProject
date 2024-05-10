import { Box } from "@mui/material";
import MyTextFields from './forms/MyTextField';
import MyPassField from './forms/MyPassField';
import MyButton from './forms/MyButton';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import AxiosInstance from './AxiosInstance';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";
import '../App.css';
import '../App1.css';
import Footer from "./Footer";

const Login = () => {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();

    const submission = (data) => {
        AxiosInstance.post(
            'login/',
            {
                email: data.email,
                password: data.password,
            }
        )
        .then((response) => {
            console.log(response);
            secureLocalStorage.setItem('Token', response.data.token);
            navigate('/');
        })
        .catch((error) => {
            console.error("Error during login.", error);
        });
    };

    return (
        <div>
            <div className={"myBackground"}>
                <form onSubmit={handleSubmit(submission)}>
                    <Box className={"whiteBox"}>
                        <Box className={"itemBox"}>
                        <Box className={"title blackTitle"}>LOGIN</Box>
                        </Box>
                        <Box className={"itemBox"}>
                            <MyTextFields
                                label={"Please Enter the Email..."}
                                name={"email"}
                                control={control}
                            />
                        </Box>
                        <Box className={"itemBox"}>
                            <MyPassField
                                label={"Please Enter the Password..."}
                                name={"password"}
                                control={control}
                            />
                        </Box>
                        <Box className={"itemBox"}>
                            <MyButton
                                label={"Login"}
                                type={"submit"}
                            />
                        </Box>
                        <Box className={"itemBox"}>No account yet? Please&nbsp;
                            <Link to="/register">Sign Up!</Link>
                        </Box>
                    </Box>
                </form>
            </div>
            <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
                <Footer />
            </div>
        </div>
    );
};

export default Login;
