import axios from "axios";

const updateAdminData = async payload => {
  try {
    const CLIENT_NAME = "Edu"; //TODO use enviroment variables, in the host as well
    const { data } = await axios.post(`https://leo_viva.npkn.net/update/${CLIENT_NAME}`, payload);

    return data;
  } catch(e) {
    console.group("updateAdminData");
    console.error(e);
    console.groupEnd("updateAdminData");

    return null;
  }
}

export default updateAdminData;
