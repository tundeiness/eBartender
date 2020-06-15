FactoryBot.define do
  factory :favourite_cocktail do
    user
    cocktail
    # association :user, factory: :user
    # association :cocktail, factory: :cocktail
    # after(:create) do |favourite_cocktail|
    #   # favourite_cocktail.user
    #   # favourite_cocktail.cocktail
    #   create(:user, user: user)
    #   create(:cocktail, cocktail: cocktail)
    # end

  end
end

