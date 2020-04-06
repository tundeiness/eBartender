RSpec.describe Api::V1::CocktailsController, type: :request do
  # initialize test data
  let!(:cocktails) { create_list(:cocktail, 20) }
  let(:valid_attributes) { { name: 'Learoo exclamix', description: 'A dangerous mix', ingredients: 'gun powder crude schnapps' } }
  let(:cocktail_id) { cocktails.first.id }

  # Test suite for GET /todos
  # describe 'GET /api/v1/cocktails' do
  #   # make HTTP get request before each example
  #   before { get '/api/v1/cocktails' }

  #   it 'returns cocktails' do
  #     expect(valid_attributes).not_to be_empty
  #   end

  #   it 'returns status code 200' do
  #     expect(response).to have_http_status(200)
  #   end
  # end

  # Test suite for GET /cocktails/:id
  # describe 'GET /api/v1/cocktails/:id' do
  #   before { get "/api/v1/cocktails/#{cocktail_id}" }

  #   context 'when the record exists' do
  #     it 'returns status code 200' do
  #       expect(response).to have_http_status(200)
  #     end
  #   end
  # end

  # Test suite for POST /cocktails
  # describe 'POST /api/v1/cocktails' do
  #   # valid payload
  #   let(:valids) { { name: 'Learoo exclamix', description: 'A dangerous mix', ingredients: 'gun powder crude schnapps', picture: 'https://www.linkingparksong.com' } }

  #   context 'when the request is valid' do
  #     before { post '/api/v1/cocktails', params: valids }

  #     it 'returns status code 201' do
  #       expect(response).to have_http_status(200)
  #     end
  #   end
  # end

  # Test suite for DELETE /cocktails/:id
  # describe 'DELETE /api/v1/cocktails/:id' do
  #   before { delete "/api/v1/cocktails/#{cocktail_id}" }

  #   it 'returns status code 204' do
  #     expect(response).to have_http_status(204)
  #   end
  # end
end
