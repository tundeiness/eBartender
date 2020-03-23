class FavouriteCocktail < ApplicationRecord
  belongs_to :user
  belongs_to :cocktail
end
