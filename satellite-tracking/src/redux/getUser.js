import axios from "axios";

export const getUser = async () => {
  const user = await axios.get("/api/session");
  // console.log(user.data);
  return user.data;
};
