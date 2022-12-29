const fetchingData = async (url, optons = { method: 'GET' } ) => {

    try{
        const res = await fetch(url, optons);
        const json = await res.json();

        return json;

    } catch ( err ){

        console.error(err);
    }

};

const formatDate = ( date ) => {
    const newDate = new Date( date );

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };

    return newDate.toLocaleDateString('es-ES', options);
}

export {
    fetchingData,
    formatDate,
};