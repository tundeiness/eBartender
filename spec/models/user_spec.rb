require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validation tests' do
    let(:user) { build(:user) }
    let(:cocktail) { build(:cocktail) }

    it 'ensures email presence' do
      user.email = nil
      user.password = 'password123'
      user.password_confirmation = 'password123'
      expect(user.save).to eq(false)
    end

    it 'ensures password presence' do
      user.email = 'anniepelts@example.com'
      user.password = nil
      expect(user.save).to eq(false)
    end

    it "ensures password's length is at least 6" do
      user.password = '12345'
      expect(user).not_to be_valid
    end
  end

  context 'Association tests' do
    describe 'model associations' do
      it 'has many favourites' do
        assc = User.reflect_on_association(:favourite_cocktails)
        expect(assc.macro).to eq :has_many
      end
    end
  end
end
