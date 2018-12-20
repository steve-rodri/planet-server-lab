import React from 'react'
import './Planet_Form.css'

export default function Planet_Form(props){
  return(
    <div className="form-container">
      <form className="planet-form" onSubmit={(e) => props.onSubmit(e)}>
        <label>Name:
        <input
          name="name"
          value={props.name}
          onChange={props.onChange}
        />
        </label>
        <label>Number of Moons:
        <input
          name="num_moons"
          type="number"
          value={props.num_moons}
          onChange={props.onChange}
        />
        </label>
        <label>Color:
        <input
          name="color"
          value={props.color}
          onChange={props.onChange}
        />
        </label>
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  )
}
