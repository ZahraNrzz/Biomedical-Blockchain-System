function Dashboard() {

    const user = JSON.parse(

        localStorage.getItem("user")

    );

    return (

        <div className="container mt-5">

            <div className="card">

                <div className="card-body">

                    <h2>

                        Welcome

                    </h2>

                    <hr />

                    <p>

                        <strong>Name:</strong>

                        {" "}

                        {user?.name}

                    </p>

                    <p>

                        <strong>Email:</strong>

                        {" "}

                        {user?.email}

                    </p>

                    <p>

                        <strong>Role:</strong>

                        {" "}

                        {user?.role}

                    </p>

                    <p>

                        <strong>Wallet:</strong>

                        {" "}

                        {user?.walletAddress}

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;