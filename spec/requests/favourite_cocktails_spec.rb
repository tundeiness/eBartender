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

      it 'returns a created status' do
        expect(response).to have_http_status(:created)
      end

    end

    context "success" do
      it "adds a favourite cocktail" do
      expect { post '/api/v1/favourite_cocktails', params: valid_params  }.to change(FavouriteCocktail, :count).by(+1)
      end
    end

  end

  describe 'GET all favourite cocktails' do

    let(:favourite_cocktail) { FactoryBot.create_list(:favourite_cocktail, 10) }
    # let(:user) { favourite_cocktail.user }
    let!(:user) { FactoryBot.create(:user) }



    before do
      sign_in user
      get '/api/v1/favourite_cocktails'
    end

    context 'when favourite_cocktail exist' do
      it 'returns HTTP status 200' do
        expect(response).to have_http_status 200
      end

      it 'returns favourite_cocktails page' do
        expect(response.body).to include("/packs-test/js/index-e3172d307c05939491ea.js")
      end
    end

    end



  describe 'DELETE /api/v1/favourite_cocktails/:id' do

    let(:favourite_cocktail) { FactoryBot.create(:favourite_cocktail) }
    let(:user) { favourite_cocktail.user }

    before do
      sign_in user
    end

    context "Delete" do
      it 'returns status code 204' do
        delete "/api/v1/favourite_cocktails/#{favourite_cocktail.cocktail.id}"
        expect(response).to have_http_status(204)
      end
    end

    context "success" do
      it "deletes a favourite cocktail" do
      expect { delete "/api/v1/favourite_cocktails/#{favourite_cocktail.cocktail.id}" }.to change(FavouriteCocktail, :count).by(-1)
      end
    end

  end

end
