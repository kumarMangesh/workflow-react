import axios from "axios";

const URL = "http://localhost:3001";

async function postWorkflow(data) {
  try {
    const { response } = await axios.post(`${URL}/upload`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export { postWorkflow };
