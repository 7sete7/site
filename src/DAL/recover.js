import api from "./api";

const recover = async ({ email }) => {
  try {
    await api.get(`/recover/CLIENT/${email}`);

    return true;
  } catch(e) {
    throw new Error("Falied");
  }
}

export default recover;
