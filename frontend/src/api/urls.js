import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_CORS_ORIGIN,
});

const urlsApi = {
  getAll: async () => {
    const res = await api.get("/api/url");
    return res.data.data;
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
