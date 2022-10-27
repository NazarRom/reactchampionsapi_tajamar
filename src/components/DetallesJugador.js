import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class DetallesJugador extends Component {
    state = {
        detalles: {},
        status: false
    }
    loadDetalles = () => {
        var id = this.props.idjugador;
        var request = "api/Jugadores/" + id;
        var url = Global.urlChampions + request;
        axios.get(url).then(res => {
            this.setState({
                detalles: res.data,
                status: true
            })
        })
    }
    componentDidMount = () =>{
        this.loadDetalles();
    }
    render() {
        if (this.state.status == true) {
            return (
                <div>
    
                
                    <h1>
                        {this.state.detalles.nombre}
                    </h1>
                    <img src={this.state.detalles.imagen}/>
                    <h2>{this.state.detalles.posicion}</h2>
                    <h2>{this.state.detalles.fechaNacimiento}</h2>
                    <h2>{this.state.detalles.pais}</h2>
                    <NavLink className="btn btn-warning" to={"/jugadoresporequipo/" + this.state.detalles.idEquipo }>Jugadores</NavLink>
                    

    
                </div>
    
            )
        }
       
    }
}
