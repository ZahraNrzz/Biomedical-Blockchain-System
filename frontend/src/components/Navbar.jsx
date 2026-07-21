import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

        window.location.reload();

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    Biomedical Blockchain
                </Link>

                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav me-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        {token && (

                            <>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/datasets"
                                    >
                                        Datasets
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/requests"
                                    >
                                        My Requests
                                    </Link>
                                </li>


                                {user?.role === "Admin" && (

                                    <li className="nav-item">

                                        <Link
                                            className="nav-link text-warning"
                                            to="/admin"
                                        >
                                            Admin Panel
                                        </Link>

                                    </li>

                                )}

                            </>

                        )}

                    </ul>

                    <ul className="navbar-nav">

                        {!token ? (

                            <>

                                <li className="nav-item">

                                    <Link
                                        className="nav-link"
                                        to="/login"
                                    >
                                        Login
                                    </Link>

                                </li>

                                <li className="nav-item">

                                    <Link
                                        className="nav-link"
                                        to="/register"
                                    >
                                        Register
                                    </Link>

                                </li>

                            </>

                        ) : (

                            <>

                                <li className="nav-item">

                                    <span className="navbar-text me-3">

                                        Welcome,
                                        {" "}
                                        {user?.name}

                                    </span>

                                </li>

                                <li className="nav-item">

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={logout}
                                    >
                                        Logout
                                    </button>

                                </li>

                            </>

                        )}

                    </ul>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;