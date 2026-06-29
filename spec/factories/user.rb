FactoryBot.define do
  factory :user do
    username { Faker::Internet.username(specifier: 5..20) }
    email { Faker::Internet.safe_email }
    password { 'foobar' }
    password_confirmation { 'foobar' }
  end

  factory :random_user, class: User do
    username { Faker::Internet.username(specifier: 5..20) }
    email { Faker::Internet.safe_email }
    transient do
      random_password { Faker::Internet.password(min_length: 6) }
    end
    password { random_password }
    password_confirmation { random_password }
  end
end
