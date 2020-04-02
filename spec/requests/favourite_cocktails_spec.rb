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




end
