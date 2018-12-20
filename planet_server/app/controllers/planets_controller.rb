class PlanetsController < ApplicationController
  def index
    render json: {msg: "Index"}
  end

  def show
    render json: {msg: "Show"}
  end
end
