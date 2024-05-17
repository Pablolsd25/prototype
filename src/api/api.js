const API_URL = "https://randomuser.me/api/";

export const getUserInfo = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }
    const data = await response.json();
    return data.results[0]; // Devuelve toda la información del primer usuario
  } catch (error) {
    throw new Error("Error fetching user info: " + error.message);
  }
};
