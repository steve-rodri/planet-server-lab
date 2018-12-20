import React from 'react'
import Planet_Form from './Planet_Form'

export default class Planet_Create extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      formData: {
        name: '',
        num_moons: 0,
        color: ''
      }
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.formData)
  }

  render (){
    return (
      <Planet_Form
        name={this.state.formData.name}
        num_moons={this.state.formData.num_moons}
        color={this.state.formData.color}
        onChange={this.handleInputChange}
        onSubmit={this.handleSubmit}
      />
    )
  }
}
