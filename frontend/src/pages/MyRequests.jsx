import { useEffect, useState } from "react";

import { getMyRequests } from "../services/requestService";

function MyRequests() {

    const [requests, setRequests] = useState([]);

    useEffect(() => {

        loadRequests();

    }, []);

    const loadRequests = async () => {

        try {

            const res = await getMyRequests();

            setRequests(res.data.requests);

        }

        catch (err) {

            alert("Cannot load requests");

        }

    };

    const badge = (status) => {

        if (status === "Approved") return "bg-success";

        if (status === "Rejected") return "bg-danger";

        return "bg-warning";

    };

    return (

        <div className="container mt-4">

            <h2>

                My Requests

            </h2>

            <table className="table table-striped">

                <thead>

                    <tr>

                        <th>Dataset</th>

                        <th>Status</th>

                        <th>Blockchain ID</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        requests.map(r => (

                            <tr key={r._id}>

                                <td>

                                    {r.dataset?.title}

                                </td>

                                <td>

                                    <span className={`badge ${badge(r.status)}`}>

                                        {r.status}

                                    </span>

                                </td>

                                <td>

                                    {r.blockchainId}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default MyRequests;