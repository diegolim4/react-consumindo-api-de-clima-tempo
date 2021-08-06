import React, {Fragment, useState} from 'react'

export default ()=>{
    const [location, setLocation] = useState(false)
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