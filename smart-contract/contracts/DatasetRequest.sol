// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract DatasetRequest {

    struct Request {

        uint256 id;
        string researcher;
        string dataset;
        bool approved;
        uint256 timestamp;

    }

    Request[] public requests;

    event RequestCreated(

        uint256 id,

        string researcher,

        string dataset

    );

    event RequestApproved(

        uint256 id

    );

    function addRequest(

        string memory researcher,

        string memory dataset

    )

    public

    {

        uint256 requestId = requests.length;

        requests.push(

            Request({

                id: requestId,

                researcher: researcher,

                dataset: dataset,

                approved: false,

                timestamp: block.timestamp

            })

        );

        emit RequestCreated(

            requestId,

            researcher,

            dataset

        );

    }

    function approveRequest(uint256 id)

    public

    {

        requests[id].approved = true;

        emit RequestApproved(id);

    }

    function getRequest(uint256 id)

    public

    view

    returns(

        uint256,

        string memory,

        string memory,

        bool,

        uint256

    )

    {

        Request memory r = requests[id];

        return(

            r.id,

            r.researcher,

            r.dataset,

            r.approved,

            r.timestamp

        );

    }

    function getTotalRequests()

    public

    view

    returns(uint256)

    {

        return requests.length;

    }

}