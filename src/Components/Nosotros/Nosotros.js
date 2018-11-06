import React, { Component } from 'react'
import './Nosotros.css'

export class Nosotros extends Component {
    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotos" />
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>

                    <p>Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit.
                          Morbi eu pharetra tellus.
                          Praesent eget consectetur mi,
                          non bibendum dolor.
                          Nulla efficitur sem sit amet arcu bibendum,
                          ut bibendum dui maximus. Nulla in ultricies arcu,
                          eget gravida dui. Nam pellentesque in ipsum id auctor.
                          Aliquam dolor odio, lacinia ac placerat vitae, sol
                          licitudin ut lorem.</p>                                
                </div>
            </div>
        )
    }
}

export default Nosotros
