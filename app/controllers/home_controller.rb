class HomeController < ApplicationController
  def index
     
  end

  def signup
    @user = User.new
  end

  def create_user
    @user = User.new params[:user]
    
    if @user.save
      redirect_to root_url
    else
      redirect_to root_url
    end
  end
  
end

