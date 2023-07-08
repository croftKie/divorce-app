import axios from "axios";
export async function getData() {
  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: "0",
      categoryId: "29811",
      limit: "48",
      country: "US",
      sort: "freshness",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US",
    },
    headers: {
      "X-RapidAPI-Key": "76ad92af15msh721714bebcce6acp132608jsna3c6421a8127",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
