require 'rails_helper'

RSpec.describe Cocktail, type: :model do
  it { should have_many(:favourite_cocktails) }

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:ingredients) }
  it { should validate_presence_of(:image) }
end
