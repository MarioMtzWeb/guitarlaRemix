//Helpls
import { fetchingData } from '~/helpers';

export const getCurso = async () => {
    const res = await fetchingData(`${process.env.API_URL}/curso?populate=imagen`);
    return res.data;
}