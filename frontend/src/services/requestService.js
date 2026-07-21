import api from "./api";

export const createRequest = (datasetId) => {

    return api.post("/requests", {

        datasetId

    });

};

export const getMyRequests = () => {

    return api.get("/requests/my");

};

export const getAllRequests = () => {

    return api.get("/requests");

};

export const approveRequest = (id) => {

    return api.put(`/requests/approve/${id}`);

};

export const rejectRequest = (id) => {

    return api.put(`/requests/reject/${id}`);

};