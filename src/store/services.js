import axios from "axios"
const newConnectorhg = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/16399/storyboard/15546/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
