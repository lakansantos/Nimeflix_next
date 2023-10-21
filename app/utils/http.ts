import axios from "axios";

export const fetcher = async (API_URL: string): Promise<void> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    // You can rethrow the error if you want to handle it higher up the call stack
    throw error;
  }
};
