import axios from 'axios';
import qs from 'qs';

const K_CLIENT_ID = 'XXXXXXXXX';
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
        return axios.get(`${K_ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    },
    uploadImages(images, token) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);
            return axios.post(`${K_ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        });
        return Promise.all(promises);
    },
    getFavoriteImages() {},
};