import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (value, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "wYmC9mTpYSRhWGBqs1axUs1s1TtsEF0_bI5VqPUjYL0",
      query: value,
      per_page: 12,
      page,
      orientation: "landscape",
    },
  });
  return response.data.results;
};
