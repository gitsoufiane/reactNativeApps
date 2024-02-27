import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer UUdZptA9F8zx481iew-JSPd2rwRIjKJhDQAg1UshWtMcDyWs0EzT_wCceZHl4pFMUzEPxDrgaU_hXsFxi4D0lwcIJDDp_htUxh8VxXAqu9WJWsv4i6omX6RMIuXaZXYx",
    Accept: "application/json",
  },
});
