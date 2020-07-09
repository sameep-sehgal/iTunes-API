import { create } from 'apisauce'


const api = create({
    baseURL:'https://itunes.apple.com/',
})


export const fetchData = searchQuery => {
    const response = api.get('search',{term:searchQuery});
    return response;
}