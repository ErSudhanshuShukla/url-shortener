import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_CORS_ORIGIN,
});

const urlsApi = {
  getAll: async (page = 1) => {
    const res = await api.get(`/api/url?page=${page}`);
    return res.data;
  },

  delete: async (id) => {
    const res = await api.delete(`/api/url/${id}`);
    return res.data;
  },
  create: async (data) => {
    const res = await api.post("/api/url", data);
    return res.data;
  },
};

export default urlsApi;
