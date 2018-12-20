import React from 'react'
import Planet from './Planet'
import './Planet_List.css'

export default function Planets_List(props){
  const planets = props.planets
  return (
    <div className="list-container">
      <div className="planets-list">
        {planets.map( planet =>
          <Planet
            planet={planet}
            key={planet.id}
            onDelete={(e) => {
              e.stopPropagation();
              props.handleDelete(planet.id);
            }}
            onEdit={(e) => {
              e.stopPropagation();
              props.handleEdit(planet);
            }}
          />
        )}
      </div>
    </div>
  )
}
