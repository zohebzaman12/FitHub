export const exerciseOptions ={
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dd6eca37c3msh1d908af84086c1dp112783jsn19362035dee1',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0b31d0cf0msh5e769f1986154f6p1c3c60jsn876ed7824f64',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData =  async (url, options) => {
    const response = await fetch(url,options);

    const data = response.json();

    return data;
}