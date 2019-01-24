import React, { Component } from 'react';
import Planet_List from './components/Planet_List'
import Planet_Create from './components/Planet_Create'
import Planet_Edit from './components/Planet_Edit'
import { planet } from './services/ajax-requests/planet.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'welcome',
      planets: [],
      selected: {}
    }
  }

  async componentDidMount(){
    await this.fetchPlanets();
  }

  fetchPlanets = async () => {
    try {
      const planets = await planet.getAll()
      this.setState({
        planets: planets
      })
    } catch (e) {
      console.log(e)
    }
  }

  createPlanet = async (data) => {
    try {
      await planet.post(data)
    } catch (e) {
      console.log(e)
    }
  }

  editPlanet = async (id, data) => {
    try {
      await planet.put(id, data)
    } catch (e) {
      console.log(e)
    }
  }

  deletePlanet = async (id) => {
    try {
      await planet.delete(id)
    } catch (e) {
      console.log(e)
    }
  }

  view(){
    switch (this.state.view) {
      case 'welcome':
        return (
          <Planet_List
            planets={this.state.planets}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        )
      case 'create':
        return (
          <Planet_Create
            onSubmit={this.handleSubmit}
          />
        )
      case 'edit':
        return (
          <Planet_Edit
            onSubmit={this.handleUpdate}
            planet={this.state.selected}
          />
        )
      default:
    }
  }

  switchView = (view) => {
    this.setState({
      view: view
    })
  }

  handleSubmit = async (data) => {
    await this.createPlanet(data);
    await this.fetchPlanets();
    this.switchView('welcome')
  }

  handleUpdate = async (id, data) => {
    await this.editPlanet(id, data);
    await this.fetchPlanets();
    await this.switchView('welcome')
  }

  handleEdit = async (planet) => {
    this.setState({
      selected: planet
    })
    this.switchView('edit');
  }

  handleDelete = async (id) => {
    await this.deletePlanet(id);
    await this.fetchPlanets();
  }

  render() {
    return (
      <div className="App">
      <h1>The Planets App</h1>
      <nav>
        <button
          onClick={(e) => this.switchView('welcome')}
          >View All</button>
        <button
          onClick={(e) => this.switchView('create')}
          >Create</button>
      </nav>
        {this.view()}

      </div>
    );
  }
}

export default App;
