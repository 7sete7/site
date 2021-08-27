import api from "./api";

const loginInfo = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token == null) throw new Error();

    const { data } = await api.get(`/auth-info/CLIENT/${token}`);

    return data;
  } catch(e) {
    return null;
  }
}

export default loginInfo;
