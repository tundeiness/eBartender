class Cocktail < ApplicationRecord
  has_many :favourite_cocktails
  has_many :favourited, through: :favourite_cocktails, source: :user

  validates :name, presence: true, allow_blank: false, length: { minimum: 5 }
  validates :description, presence: true, allow_blank: false, length: { minimum: 10 }
  validates :ingredients, presence: true, allow_blank: false, length: { minimum: 10 }
  validates :image, presence: true
end
