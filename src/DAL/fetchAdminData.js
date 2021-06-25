import axios from "axios";

const fetchAdminData = async () => {
  try {
    const CLIENT_NAME = "Edu"; //TODO use enviroment variables, in the host as well
    const { data } = await axios.get(`https://leo_viva.npkn.net/connection/${CLIENT_NAME}`);

    return data;
  } catch(e) {
    console.group("fetchAdminData");
    console.error(e);
    console.groupEnd("fetchAdminData");

    return null;
  }
}

export default fetchAdminData;
