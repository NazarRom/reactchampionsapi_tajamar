import React, { Component } from 'react'
//importamos axios para consultar la api
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';
export default class DetalleEquipo extends Component {
    //el equipo es un objeto por lo tanto hay que metrlo en un objeto
    state = {
        equipo: {},
        status: false
    }
    loadEquipoDetalle = () => {
        var id = this.props.id;
        var request = "api/Equipos/" + id;
        var url = Global.urlChampions + request;
        axios.get(url).then(res => {
            this.setState({
                equipo: res.data,
                status: true
            })
        })
    }
    componentDidMount = () => {
        this.loadEquipoDetalle();
    }
    componentDidUpdate = (oldProps) => {
        if (oldProps.id != this.props.id) {
            this.loadEquipoDetalle();
        }
    }

    render() {
        if (this.state.status == true) {
            return (
                <div>


                    <h1>{this.state.equipo.nombre}</h1>

                    <img style={{width:"300px",height:"350px"}} src={this.state.equipo.imagen} />

                    <h1>{this.state.equipo.champions}</h1>

                    <p>{this.state.equipo.descripcion}</p>

                    <NavLink className="btn btn-info" to="/">Volver a Home</NavLink>
                    <NavLink className="btn btn-warning" to={"/jugadoresporequipo/" + this.state.equipo.idEquipo}>Jugadores</NavLink>
                </div>
            )
        }

    }
}
