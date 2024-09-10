import axios from 'axios';

// Define the API URL, replace with your actual API endpoint
const API_URL = "http://localhost:5005/webhooks/rest/webhook";

// Edge runtime setup
export const runtime = 'edge';

// POST request handler
export async function getChats(senderId: string, userMessage: string) {
  try {

    // Making the POST request to the Rasa API using axios
    const response = await axios.post(API_URL, {
      sender: senderId,
      message: userMessage,
    });

    // Returning the response data as a stream or a JSON response
    return response.data;
  } catch (error) {
    console.error('Error sending message to Rasa:', error);
  }
}
