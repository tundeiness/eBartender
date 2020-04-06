class LandingController < ApplicationController
  def index
  end

  def app
    if !signed_in?
      render layout: 'welcome'
    else
      render :index
    end
  end
end
