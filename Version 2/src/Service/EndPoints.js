import axios from "axios";
import { instance } from "./HttpClient";

export const callAppLink = (apiLink) => {
  try {
    return axios.get("http://localhost:3000/scaard/apps/" + apiLink);
    //   .then((app) => console.log(app));
  } catch (error) {
    console.log("Api error Occur");
  }
};
