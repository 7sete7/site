import api from "./api";

const login = async values => {
  try {
    const { data } = await api.post("/auth/CLIENT", values);

    return data;
  } catch(e) {
    return null;
  }
}

export default login;
