require 'rails_helper'

RSpec.describe Api::V1::CocktailsController, type: :controller do


    # setting authorization headers for the given user
    #before(:each) { authWithUser(user) }
    # clearing any authorization headers
   # before(:each) { clearToken }

    # let(:user) { create(:user) }


    # describe "with valid token", validToken: true do
    #   before(:each) { authWithUser(user) }

    #   describe "GET #show" do
    #     let(:test_model) { create(:test_model) }
    #     before(:each) { get :show, id: test_model.id }

    #     it "returns the information for one test_model" do
    #       expect(json).to have_key('test_model')
    #     end

    #     it { should respond_with 200 }
    #   end

    #   describe "GET #index" do
    #     let!(:test_models) { create_list(:test_model, 2) }

    #     context "with id parameters" do
    #       before(:each) { get :index, { :test_models => [ test_models.first.id ] } }

    #       it "returns a subset of test_models" do
    #         expect(json['test_models'].count).to eq(1)
    #       end

    #       it { should respond_with 200 }
    #     end

    #     context "without id parameters" do
    #       before(:each) { get :index }

    #       it "returns all test_models" do
    #         expect(json['test_models'].count).to eq(2)
    #       end

    #       it { should respond_with 200 }
    #     end
    #   end
    # end

    # describe "without a valid token", noToken: true do
    #   before(:each) { clearToken }
    #   after(:each) { expect(response.status).to eq(401) }

    #   it "GET #show is unauthorized" do
    #     get :show, id: 0
    #   end

    #   it "GET #index is unauthorized" do
    #     get :index
    #   end
    # end

end

