import React from 'react'
import './Planet.css'

export default function Planet(props){
  const planet = props.planet
  const style = {
    backgroundColor: planet.color
  }
  return (
    <div className= "planet" style={style}>
      <h2>{planet.name}</h2>
      <h3>{planet.num_moons}</h3>
      <h3>{planet.color}</h3>
      <button className="edit" onClick={props.onEdit}>Edit</button>
      <button className="delete" onClick={props.onDelete}>Delete</button>
    </div>
  )
}
