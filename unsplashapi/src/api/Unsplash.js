import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6qpK0UyM0DSffexTjwkrzWzTWc61nIOTrq7ryywnxAs",
  },
});
