import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID i95M5rDrFbph3HJPs2lbro_RCEeDZzISQbyF3oeSlZk',
  },
});
