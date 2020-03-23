FactoryBot.define do
  factory :user do
    username { Faker::Name.name }
    email { Faker::Internet.safe_email }
    password { 'foobar' }
    password_confirmation { 'foobar' }
  end

  factory :random_user, class: User do
    username { Faker::Name.name }
    email { Faker::Internet.safe_email }
    password { Faker::Password.password }
    password_confirmation { Faker::Password.password_confirmation }
  end
end
