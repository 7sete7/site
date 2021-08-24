import api from "./api";

const updateAdminData = async payload => {
  try {
    const { data } = await api.post("/update/CLIENT", payload);

    return data;
  } catch(e) {
    console.group("updateAdminData");
    console.error(e);
    console.groupEnd("updateAdminData");

    return null;
  }
}

export default updateAdminData;
