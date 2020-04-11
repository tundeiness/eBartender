class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :favourite_cocktails
  has_many :favourites, through: :favourite_cocktails, source: :cocktail

  validates :username, presence: true, uniqueness: true, allow_blank: false, length: { minimum: 5 }, :message => 'Please enter username'
  validates :email, presence: true, length: { minimum: 5 }, :message => 'Please enter email'
  validates :password, :message => 'Please enter password'
  validates :password_confirmtion, :message => 'Please confirm your password'
end
