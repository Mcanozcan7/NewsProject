import '../App.css';
import { Box } from "@mui/material";
import MyTextFields from './forms/MyTextField';
import MyPassField from './forms/MyPassField';
import MyButton from './forms/MyButton';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import AxiosInstance from './AxiosInstance';
import { useNavigate } from 'react-router-dom';
import '../App1.css';
import Footer from "./Footer";

const Register = () => {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();

    const submission = (data) => {
        AxiosInstance.post(
            'register/',
            {
                email: data.email,
                password: data.password,
            }
        )
        .then(() => {
            navigate('/login');
        });
    };

    return (
        <div>
            <div className={"myBackground"}>
                <form onSubmit={handleSubmit(submission)}>
                    <Box className={"whiteBox"}>
                        <Box className={"itemBox"}>
                        <Box className={"title blackTitle"}>REGISTER</Box>
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
                            <MyPassField
                                label={"Please password again..."}
                                name={"password2"}
                                control={control}
                            />
                        </Box>
                        <Box className={"itemBox"}>
                            <MyButton
                                label={"Sign Up!"}
                                type={"submit"}
                            />
                        </Box>
                        <Box className={"itemBox"}>Already registered? Please&nbsp;
                            <Link to="/">Login!</Link>
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

export default Register;
