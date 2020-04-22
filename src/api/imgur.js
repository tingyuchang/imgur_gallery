import axios from 'axios';
import qs from 'qs';

const K_CLIENT_ID = 'XXXXXXXXXXX';
const K_ROOT_URL = 'https://api.imgur.com';

export default {
    login () {
        const queryString = {
            client_id: K_CLIENT_ID,
            response_type: 'token'
        };
        window.location = `${K_ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    },
    fetchImages(token) {
        return axios.get(K_ROOT_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    },
    uploadImages() {},
    getFavoriteImages() {},
};