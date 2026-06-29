require 'rails_helper'

RSpec.describe Api::V1::CocktailsController, type: :request do

  describe 'GET all cocktails' do

    context "when cocktails exist" do
      let!(:users) { FactoryBot.create(:user) }
      let!(:cocktails) { FactoryBot.create_list(:cocktail, 10) }


      before do
        sign_in users
        get '/api/v1/cocktails'
      end

        it 'returns HTTP status 200' do
          expect(response).to have_http_status 200
        end

        it 'returns all cocktails' do
          body = JSON.parse(response.body)
          expect(body['data'].size).to eq(10)
        end
    end

    context "when user is not signed in" do
      let!(:cocktails) { FactoryBot.create_list(:cocktail, 10) }


      before do
        get '/api/v1/cocktails'
      end

      it 'returns status code 401' do
        expect(response).to have_http_status(401)
      end

    end

  end



   # Test suite for GET /cocktails/:id
   describe 'GET Single cocktail' do
    let!(:users) { FactoryBot.create(:user) }
    let!(:cocktails) { FactoryBot.create_list(:cocktail, 10) }
    let(:cocktail_id) { cocktails.first.id }


    before do
      sign_in users
    end

    before { get "/api/v1/cocktails/#{cocktail_id}" }

    context 'when the record exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

    end


  end

  describe 'POST /api/v1/cocktails' do
    let!(:admin)        { FactoryBot.create(:admin_user) }
    let!(:regular_user) { FactoryBot.create(:user) }
    let(:valid_params) do
      {
        name:        'Margarita',
        description: 'A classic tequila cocktail with lime juice and salt',
        ingredients: 'Tequila, lime juice, triple sec, salt',
        image:       'https://example.com/margarita.jpg'
      }
    end

    context 'when an admin is signed in with valid params' do
      before do
        sign_in admin
        post '/api/v1/cocktails', params: valid_params
      end

      it 'returns HTTP status 201' do
        expect(response).to have_http_status(201)
      end

      it 'creates the cocktail record' do
        body = JSON.parse(response.body)
        expect(body['data']['name']).to eq('Margarita')
      end
    end

    context 'when a non-admin authenticated user posts' do
      before do
        sign_in regular_user
        post '/api/v1/cocktails', params: valid_params
      end

      it 'returns HTTP status 403' do
        expect(response).to have_http_status(403)
      end
    end

    context 'when the request is unauthenticated' do
      before { post '/api/v1/cocktails', params: valid_params }

      it 'returns HTTP status 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

end
