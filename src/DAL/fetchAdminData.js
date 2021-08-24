import api from "./api";

const fetchAdminData = async () => {
  try {
    const { data } = await api.get("/connection/CLIENT");

    return data;
  } catch(e) {
    console.group("fetchAdminData");
    console.error(e);
    console.groupEnd("fetchAdminData");

    return null;
  }
}

export default fetchAdminData;
