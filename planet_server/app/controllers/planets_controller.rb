class PlanetsController < ApplicationController
  def index
    planets = Planet.all
    render json: {planets: planets}
  end

  def show
    render json: {msg: "Show"}
  end
end
