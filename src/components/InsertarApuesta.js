import React, { Component } from 'react'

export default class InsertarApuesta extends Component {
  render() {
    state = {
        apuesta:{}
    }
    return (
      <div>
        <h1>Inset Apuesta</h1>
        <form>
            <label>Usuario</label>
            <input type="text"/>
            <label>Real Madrid</label>
            <input type="text"/>
            <label>Atletico Madrid</label>
            <input type="text"/>
            <label>Fecha</label>
            <input type="date"/>
        </form>
      </div>
    )
  }
}
