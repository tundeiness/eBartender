require 'rails_helper'

RSpec.describe Api::V1::FavouriteCocktailsController, type: :request do

  describe 'POST Favourite Cocktails' do
    let!(:users) { FactoryBot.create(:user) }
    let!(:cocktails) { FactoryBot.create_list(:cocktail, 10) }
    let!(:favourite_cocktail) { FactoryBot.create_list(:favourite_cocktail, 10) }
    let(:cocktail_id) { cocktails.first.id }

    let(:valid_params) do
      { favourite_cocktail: { cocktail_id: cocktails.first.id } }
    end

    before do
      sign_in users
    end

    context 'when the request is valid' do

      before { post '/api/v1/favourite_cocktails', params: valid_params }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end

      it 'returns a created status' do
        expect(response).to have_http_status(:created)
      end

    end

  end

  describe 'GET all favourite cocktails' do

    let!(:users) { FactoryBot.create(:user) }
    let!(:favourite_cocktail) { FactoryBot.create_list(:favourite_cocktail, 10) }
    let(:cocktail_id) { cocktails.first.id }


    before do
      sign_in users
      get '/api/v1/favourite_cocktails'
    end

    it 'returns HTTP status 200' do
      expect(response).to have_http_status 200
    end
  end



  describe 'DELETE /api/v1/favourite_cocktails/:id' do
    # let!(:users) { FactoryBot.create(:user) }
    # let!(:cocktails) { FactoryBot.create(:cocktail) }
    # let!(:favourite_cocktail) { FactoryBot.create_list(:favourite_cocktail, 10) }
    # let!(:favourite_cocktail) { FactoryBot.create_list(:favourite_cocktail, 10) }
    # let(:cocktail_id) { favourite_cocktail.first.id }
    # { build :article, title: 'article title', author: author }
    # candidate = create(:candidate, term: term)

    # def create_cocktails(x)
    #   x.times.map { |i| create :cocktail, idx: i }
    #   let!(:favourite_cocktail) { FactoryBot.create_list(:favourite_cocktail, 10, cocktail: cocktails) }
    # end

    # let!(:favourite_cocktail) { FactoryBot.create_list(:favourite_cocktail, 10, user: users, cocktail: cocktails) }

    # let(:user) { FactoryBot.create(:user) }
    # let(:cocktails) { FactoryBot.create(:cocktail) }
    # let(:favourite_cocktail) { FactoryBot.create(user: user, cocktails: cocktails) }
    # let(:cocktail_id) { favourite_cocktail.first.id }


    # let(:favourite_cocktail) { FactoryBot.create }
    # let(:favourite_cocktail) { FactoryBot.create(cocktails: cocktails) }
    # let(:user) { favourite_cocktail.user }
    # let(:cocktail_id) { favourite_cocktail.first.id }


    # user = create(:user)
    # foobar = create(:foobar)
    # blogs = create_list(:blog, 5, user: user, foobar: foobar)

    # before do
    #   sign_in user
    # end

    let(:favourite_cocktail) { FactoryBot.create(:favourite_cocktail) }
    let(:user) { favourite_cocktail.user }
# sign in the user

    before do
      sign_in user
    end

    it 'returns status code 204' do
      delete "/api/v1/favourite_cocktails/#{favourite_cocktail.cocktail.id}"
      expect(response).to have_http_status(204)
    end

    # before { delete "/api/v1/favourite_cocktails/#{cocktail_id}" }

    # # thing = create(:thing)
    # # delete '/things', :thing => { :id => thing.id'}

    # it 'returns status code 204' do
    #   expect(response).to have_http_status(204)
    # end
  end





end
