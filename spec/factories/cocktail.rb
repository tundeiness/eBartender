FactoryBot.define do
  factory :cocktail do
    name { Faker::Restaurant.name }
    description { Faker::Lorem.sentence }
    ingredients { Faker::Lorem.sentence }
    image { Faker::Avatar.image }
  end
end
