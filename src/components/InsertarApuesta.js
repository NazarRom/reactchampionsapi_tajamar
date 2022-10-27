import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Global from "../Global";

export default class InsertarApuesta extends Component {
  cajaUserRef = React.createRef();
  cajaRealRef = React.createRef();
  cajaAtletiRef = React.createRef();
  cajaFechaRef = React.createRef();

  state = {
    apuesta: {},
    status: false,
  };
  updateApuesta = (e) => {
    e.preventDefault();
    var user = this.cajaUserRef.current.value;
    var real = this.cajaRealRef.current.value;
    var atleti = this.cajaAtletiRef.current.value;

    var resultado = real + " - " + atleti;
    var fecha = this.cajaFechaRef.current.value;

    var data = {
      usuario: user,
      resultado: resultado,
      fecha: fecha,
    };
    var request = "api/Apuestas";
    var url = Global.urlChampions + request;

    axios.post(url, data).then((res) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Inset Apuesta</h1>
        {this.state.status == true && <Navigate to="/apuestas"></Navigate>}
        <form
          onSubmit={this.updateApuesta}
          style={{ width: "400px" }}
          className="container"
        >
          <label>Usuario</label>
          <input className="form-control" type="text" ref={this.cajaUserRef} />
          <label>Real Madrid</label>
          <input className="form-control" type="text" ref={this.cajaRealRef} />
          <label>Atletico Madrid</label>
          <input className="form-control" type="text" ref={this.cajaAtletiRef} />
          <label>Fecha</label>
          <input className="form-control" type="date" ref={this.cajaFechaRef} />
          <button className="btn btn-success">Apostar</button>
        </form>
      </div>
    );
  }
}
