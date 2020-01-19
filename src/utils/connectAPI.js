import * as Config from "../redux/constants/Config";
import axios from "axios";

export default function connectAPI(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  });
}
