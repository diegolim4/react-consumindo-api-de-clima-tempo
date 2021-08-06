import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false); // state para gurda os dados da API para depois exibir

    // function expression responsável pela chamada da api

    let getWeather = async (lat, long) => {
        let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,  
                lang: 'pt',
                units: 'metric'
            }
        })
        setWeather(res.data)
        
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => { // pede permissão para o navegador e pegar as coordenadas
            //console.log(position.coords.latitude, position.coords.longitude);
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, [])

    if (location === false) {
        return (
            <h3>Você precisa habilitar a localização em seu navegador</h3>
        )
    } else if (weather === false) {
        return (
            <h3>Carregando o clima...</h3>
        )
    } else {
        return (
            <Fragment>
                <h3>Clima no seu local({weather['weather'][0]['description']})</h3>
                <hr />
                <ul>
                    <li>Temperatura atual: {weather['main']['temp']}º</li>
                    <li>Temperatura Máxima: {weather['main']['temp_max']}º</li>
                    <li>Temperatura Minima: {weather['main']['temp_min']}º</li>
                    <li>Pressão: {weather['main']['pressure']} hpa</li>
                    <li>Umidade: {weather['main']['humidity']}%</li>
                </ul>
            </Fragment>
        );
    }
}