import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class Apuestas extends Component {
    state = {
        apuestas:[],
        status:false
    }
    loadApuestas = () =>{
        var request = "api/Apuestas";
        var url = Global.urlChampions + request;
        axios.get(url).then(res =>{
            this.setState({
                apuestas:res.data,
                status:true
            })
        })
    }
    componentDidMount = () =>{
        this.loadApuestas();
    }
  render() {
    return (
      <div>
        <h1>Apuestas</h1>
        <table className='table table-bordered table-warning'>
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Resultado</th>
                    <th>frcha</th>
                </tr>
            </thead>
            <tbody>
            {
            this.state.apuestas.map((apu,index)=>{
                return(<tr key={apu.idApuesta}>
                    <td>{apu.usuario}</td>
                    <td>{apu.resultado}</td>
                    <td>{apu.fecha}</td>
                    </tr>)
            })
        }
            </tbody>
        </table>
        <NavLink className="btn btn-warning" to="/">Realizar Apuesta</NavLink>
      </div>
    )
  }
}
