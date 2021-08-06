import React, {Fragment, useState, useEffect} from 'react'

export default ()=>{
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false); // state para gurda os dados da API para depois exibir
    
    // function expression responsável pela chamada da api
    

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{ // pede permissão para o navegador e pegar as coordenadas
            console.log(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, [])

    if(location == false){
        return(
            <h1>Você precisa habilitar a localização em seu navegador</h1>
        )
    }else{
        return(
            <Fragment>
                <h3>Clima no seu local</h3>
                <hr />
                <ul>
                    <li>Temperatura atual: xº</li>
                    <li>Temperatura Máxima: xº</li>
                    <li>Temperatura Minima: xº</li>
                    <li>Pressão: x hpa</li>
                    <li>Umidade: x%</li>
                </ul>    
            </Fragment>
        );
    }    
}