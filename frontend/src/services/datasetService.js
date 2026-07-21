import api from "./api";

export const getDatasets = () => {

    return api.get("/datasets");

};