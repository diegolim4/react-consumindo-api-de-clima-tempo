import React, {Fragment, useState, useEffect} from 'react'

export default ()=>{
    const [location, setLocation] = useState(false)

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, [])

    return(
        <Fragment>
            <h3>Clima no seu local</h3>
            <hr />
            <ul>
                <li>Temperatura atual: xº</li>
                <li>Temperatura Máxima</li>
                <li>Temperatura Minima</li>
                <li>Prexão: x hpa</li>
                <li>Umidade: x%</li>
            </ul>

        </Fragment>
    )
}