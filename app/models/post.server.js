import { fetchingData } from "~/helpers";

export async function getPosts(){
    
    const res = await fetchingData(`${process.env.API_URL}/posts?populate=imagen`);
    return res.data;
};

export async function getPost( url ){
    
    const res = await fetchingData(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
    return res.data;
};