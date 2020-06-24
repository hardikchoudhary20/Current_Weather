const key = 'yPHOLL5JczCecER1UH4UlxSnAXizqMbo'

//get weather information
const getWeather = async(id) => { //id is key from getcity
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'

    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);

    const data =await response.json();

    return data[0];

}

//get city info 
const getCity = async(city) => 
{


    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query);

    const data = await response.json();
    return data[0];


};
getCity('rohtak')
 .then(data =>{
     return getWeather(data.Key)
 } ).then(data =>{
    console.log(data)}) // data from getWeather
 .catch(err => console.log(err));

