import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Productos from './Productos/Productos'
import Nosotros from './Nosotros/Nosotros'
import Error from './Error/Error'
import infoProductos from '../datos/datos.json';
import Header from './Header/Header'
import SingleProduct from './SingleProduct/SingleProduct'
import Navegacion from './Navegacion/Navegacion'
import Contacto from './Contacto/Contacto'


export class Router extends Component {

    state = {
        productos: []
    }


    componentWillMount() {
        this.setState({
            productos: infoProductos
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Header />
                    <Navegacion />
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Productos
                                productos={this.state.productos}
                            />
                        )} />
                        <Route exact path="/nosotros" component={Nosotros} />
                        <Route exact path="/productos" render={() => (
                            <Productos
                                productos={this.state.productos}
                            />
                        )} />

                        <Route exact path="/producto/:productoId" render={(props) => {
                            let idProducto = props.location.pathname.replace('/producto/', '');
                            return (
                                <SingleProduct
                                    producto={this.state.productos[idProducto]}
                                />
                            )
                        }} />

                        <Route exact path="/contacto" component={Contacto} />

                        <Route component={Error} />

                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router
