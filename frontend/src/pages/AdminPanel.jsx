import { useEffect, useState } from "react";

import {

    getAllRequests,

    approveRequest

} from "../services/requestService";

function AdminPanel() {

    const [requests, setRequests] = useState([]);

    useEffect(() => {

        loadRequests();

    }, []);

    const loadRequests = async () => {
    try {

        const res = await getAllRequests();

        console.log(res.data);

        setRequests(res.data.requests || []);

    } catch (err) {
        console.log(err);
    }
};
    const approve = async (id) => {

        try {

            await approveRequest(id);

            alert("Request Approved");

            loadRequests();

        }

        catch (err) {

    console.log(err);

    console.log(err.response);

    console.log(err.response?.data);

    alert(err.response?.data?.message || "Approve Failed");

}

    };

    return (

        <div className="container mt-4">

            <h2>

                Admin Panel

            </h2>

            <table className="table table-bordered">

                <thead>

                    <tr>

                        <th>Researcher</th>

                        <th>Dataset</th>

                        <th>Status</th>

                        <th>Blockchain</th>

                        <th></th>

                    </tr>

                </thead>

                <tbody>

                    {

                        requests.map(r=>(

                            <tr key={r._id}>

                                <td>

                                    {r.researcher?.name}

                                </td>

                                <td>

                                    {r.dataset?.title}

                                </td>

                                <td>

                                    {r.status}

                                </td>

                                <td>

                                    {r.blockchainId}

                                </td>

                                <td>

                                    {

                                        r.status==="Pending" &&

                                        <button

                                            className="btn btn-success"

                                            onClick={()=>approve(r._id)}

                                        >

                                            Approve

                                        </button>

                                    }

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default AdminPanel;