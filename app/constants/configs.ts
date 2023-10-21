export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const DATA_PATH = {
  trending: `${API_URL}/trending`,
  popular: `${API_URL}/popular`,
  otherAnimes: `${API_URL}/random-anime`,
  recentlyAdded: `${API_URL}/recent-episodes`,
};
