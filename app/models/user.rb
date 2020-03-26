class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :favourite_cocktails
  has_many :favourites, through: :favourite_cocktails, source: :cocktail

  # validates :username, presence: true, uniqueness: true, allow_blank: false, length: { minimum: 5 }
  validates :email, presence: true, length: { minimum: 5 }
end
