class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string :name
      t.integer :num_moons
      t.string :color

      t.timestamps
    end
  end
end
