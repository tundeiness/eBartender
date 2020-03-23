class CreateFavouriteCocktails < ActiveRecord::Migration[6.0]
  def change
    create_table :favourite_cocktails do |t|
      t.references :user, null: false, foreign_key: true
      t.references :cocktail, null: false, foreign_key: true

      t.timestamps
    end
  end
end
