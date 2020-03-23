class CreateCocktails < ActiveRecord::Migration[6.0]
  def change
    create_table :cocktails do |t|
      t.string :name,                     null: false
      t.string :description,              null: false
      t.string :ingredients,              null: false
      t.string :image,                    null: false

      t.timestamps
    end
  end
end
