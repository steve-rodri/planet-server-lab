import React from 'react'
import Planet_Form from './Planet_Form'

export default class Planet_Edit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      formData: {
        name: this.props.planet.name,
        num_moons: this.props.planet.num_moons,
        color: this.props.planet.color
      }
    }
  }

  componentWillReceiveProps(nextProps){
    const planet = nextProps.planet
    this.setState({
      formData: {
        name: planet.name,
        num_moons: planet.num_moons,
        color: planet.color
      }
    })
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

  handleSubmit = async(e) => {
    e.preventDefault();
    const id = this.props.planet.id
    const data = this.state.formData
    await this.props.onSubmit(id, data)
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
