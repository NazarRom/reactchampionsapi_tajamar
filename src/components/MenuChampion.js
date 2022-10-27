import React, { Component } from 'react'
//importamos {NavLink} para navegar
import { NavLink } from 'react-router-dom';
//importo Global para la url 
import Global from '../Global';
//importo axios 
import axios from 'axios';
export default class MenuChampion extends Component {
    state = {
        equipos:[],
        status : false
    }
    loadEquipos = () =>{
        var request = "api/Equipos";
        var url = Global.urlChampions+ request;
        axios.get(url).then(res => {
            this.setState({
                equipos:res.data,
                status:true
            })
        })
    }
    componentDidMount = () =>{
        this.loadEquipos();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand" >Champions</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link"  aria-current="page" to="/apuestas" >Apuestas</NavLink>
                               
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Equipos
                                </a>
                                <ul className="dropdown-menu">
                                {
                                    this.state.status == true &&
                                    this.state.equipos.map((equip,index)=>{
                                        return(<li className="dropdown-item" key={equip.idEquipo}><NavLink  to={"/equipo/"+ equip.idEquipo}>{equip.nombre}</NavLink></li>)
                                    })
                                }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
