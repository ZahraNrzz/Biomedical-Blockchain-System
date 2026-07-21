import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        email: "",

        password: ""

    });

    const changeHandler = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            const res = await login(form);

            localStorage.setItem("token", res.data.token);

            localStorage.setItem(

                "user",

                JSON.stringify(res.data.user)

            );

            navigate("/");

        }

        catch (err) {

            alert(

                err.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card">

                        <div className="card-body">

                            <h3 className="mb-4">

                                Login

                            </h3>

                            <form onSubmit={submitHandler}>

                                <input

                                    className="form-control mb-3"

                                    placeholder="Email"

                                    name="email"

                                    onChange={changeHandler}

                                />

                                <input

                                    className="form-control mb-3"

                                    placeholder="Password"

                                    type="password"

                                    name="password"

                                    onChange={changeHandler}

                                />

                                <button

                                    className="btn btn-primary w-100"

                                >

                                    Login

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;