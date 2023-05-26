import axios from "axios";

const Instance = axios.create({
  baseURL: "https://tiktokbackend-renjithcmrenju.b4a.run",
});

export default Instance;
