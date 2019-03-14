import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 11a1dc9a6b13ac6402d3bea44f778d75b100d948a8c59aa9d640862b5639f6fc'
    }
});