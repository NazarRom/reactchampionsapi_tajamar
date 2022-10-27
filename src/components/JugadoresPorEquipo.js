import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';
export default class JugadoresPorEquipo extends Component {
    state = {
        jugadores: [],
        status: false
    }
    loadJugadores = () => {
        var idequipo = this.props.id
        var request = "api/Jugadores/JugadoresEquipo/" + idequipo;
        var url = Global.urlChampions + request;
        axios.get(url).then(res => {
            this.setState({
                jugadores: res.data,
                status: true
            })
        })
    }
    componentDidMount = () => {
        this.loadJugadores();
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    this.state.status == true &&
                    this.state.jugadores.map((jug,index)=>{
                        return(<tr key={jug.idJugador}>
                            <td>{jug.nombre}</td>
                            <td><img src={jug.imagen}/></td>
                            <td><NavLink className="btn btn-success" to={"/detallesjugador/" + jug.idJugador}>Detalles</NavLink></td>
                        </tr>)
                    })
                }
                    </tbody>
                </table>
                
            </div>
        )
    }
}
