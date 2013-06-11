class HomeController < ApplicationController
  def index
    unless session[:user_id]
      redirect_to login_path, flash: { notice: 'You are not logged in' }
    end

    gon.current_user = 7 #current_user
    
  end

  def signup
    @load_ember = false
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

