import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        name: "",

        email: "",

        password: "",

        walletAddress: ""

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

            await register(form);

            alert("Registration Successful");

            navigate("/login");

        }

        catch (err) {

    console.log(err);

    console.log(err.response);

    console.log(err.response?.data);

    alert(JSON.stringify(err.response?.data));

}

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-body">

                            <h3 className="mb-4">

                                Register

                            </h3>

                            <form onSubmit={submitHandler}>

                                <input

                                    className="form-control mb-3"

                                    placeholder="Name"

                                    name="name"

                                    onChange={changeHandler}

                                />

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

                                <input

                                    className="form-control mb-3"

                                    placeholder="Wallet Address"

                                    name="walletAddress"

                                    onChange={changeHandler}

                                />

                                <button className="btn btn-success w-100">

                                    Register

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;