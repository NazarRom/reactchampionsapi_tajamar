import React, { Component } from 'react'
//importo {useParams} para usar parametros
import { useParams } from 'react-router-dom';
//importamos {BrowserRouter,Routes,Routes}
import { BrowserRouter,Route,Routes } from 'react-router-dom';
//importamos el menu
import MenuChampion from './components/MenuChampion';
//importamos Home
import Home from './components/Home';
//imporatmos Detalle equipo para pasar el ID al componente y mostrar todo ahí
import DetalleEquipo from './components/DetalleEquipo';
import JugadoresPorEquipo from './components/JugadoresPorEquipo';
import DetallesJugador from './components/DetallesJugador';
import Apuestas from './components/Apuestas';
export default class Router extends Component {
  render() {
    function DetalleEquipoElement(){
        var {idequipo} = useParams();
        return (<DetalleEquipo id={idequipo}/>)
    }
    function JugadoresEquipoElement(){
        var{idequipo} =useParams();
        return(<JugadoresPorEquipo id={idequipo}/>)
    }
    function DetallesJugadorElement(){
        var {idjugador} = useParams();
        return(<DetallesJugador idjugador={idjugador}/>)
    }
    return (
      <BrowserRouter>
      <MenuChampion/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apuestas' element={<Apuestas/>}/>
        <Route path='/equipo/:idequipo'element={<DetalleEquipoElement/>}/>
        <Route path='/jugadoresporequipo/:idequipo'element={<JugadoresEquipoElement/>}/>
        <Route path='/detallesjugador/:idjugador' element={<DetallesJugadorElement/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
