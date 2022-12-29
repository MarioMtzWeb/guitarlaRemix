import { fetchingData } from "~/helpers";

export async function getGuitarras(){
    
    const res = await fetchingData(`${process.env.API_URL}/guitarras?populate=imagen`);
    return res.data;
};

export async function getGuitarra( url ){
    const res = await fetchingData(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    return res.data;
}