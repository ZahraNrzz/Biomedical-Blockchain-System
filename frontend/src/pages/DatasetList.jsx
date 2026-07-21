import { useEffect, useState } from "react";

import { getDatasets } from "../services/datasetService";

import { createRequest } from "../services/requestService";

function DatasetList() {

    const [datasets, setDatasets] = useState([]);

    useEffect(() => {

        loadDatasets();

    }, []);

    const loadDatasets = async () => {

        try {

            const res = await getDatasets();

            setDatasets(res.data);

        }

        catch (err) {

    console.log(err);

    console.log(err.response);

    alert(err.response?.data?.message || err.message);

}

    };

    const requestDataset = async (id) => {

        try {

            await createRequest(id);

            alert("Dataset request submitted successfully");

        }

        catch (err) {

            alert(

                err.response?.data?.message ||

                "Request failed"

            );

        }

    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">

                Available Datasets

            </h2>

            <table className="table table-bordered">

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Description</th>

                        <th>Hospital</th>

                        <th></th>

                    </tr>

                </thead>

                <tbody>

                    {

                        datasets.map(dataset => (

                            <tr key={dataset._id}>

                                <td>

                                    {dataset.title}

                                </td>

                                <td>

                                    {dataset.description}

                                </td>

                                <td>

                                    {dataset.hospital}

                                </td>

                                <td>

                                    <button

                                        className="btn btn-primary"

                                        onClick={() => requestDataset(dataset._id)}

                                    >

                                        Request Dataset

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default DatasetList;