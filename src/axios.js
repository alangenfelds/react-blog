import axios from 'axios';

const instance = axios.create({
    baseUrl :  'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.interceptors.request.use(requestConfig => {
    console.log(requestConfig);

    //we can edit request

    return requestConfig;
}, error => {
    console.log(error);
    return Promise.reject(error);
})

export default instance;