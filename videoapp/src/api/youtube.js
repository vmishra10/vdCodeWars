import axios from 'axios';

const KEY = 'AIzaSyAlu2r6tUf-wQUYnD30egj1JgzOwnF78eg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});
