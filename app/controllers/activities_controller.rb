class ActivitiesController < ApplicationController
  before_action :set_activity, only: [:show, :edit, :update, :destroy]
  #before_filter :authenticate
  #before_filter :authorize, except: [:index, :show]
  before_filter :authenticate_user
  # GET /activities
  # GET /activities.json
  def index
    if current_user
      @activities = Activity.where(:user_id => current_user.id)
      #@category = @categories.map(&:category))
      respond_to do |format|
        format.json{ render json: @activities.as_json() }
      end
    else
      return false
      #flash[:notice] = "You are not authorized to perform this action"
    end
  end

  # GET /activities/1
  # GET /activities/1.json
  def show
  end

  # GET /activities/new
  def new
    @activity = Activity.new
  end

  # GET /activities/1/edit
  def edit
    @activity = Activity.find(params[:id])
  end

  # POST /activities
  # POST /activities.json
  def create
    p "hi"
    @user = User.find(current_user.id)
    @activity = Activity.new(activity_params)
    #@activity.name = params[:name]
    #@activity.desc = params[:desc]
    @activity.user = @user
    respond_to do |format|
      if @activity.save
        format.json { render json: @activity }
      else
        format.json { render json: @activity.errors}
      end
    end

=begin

    respond_to do |format|
      if @activity.save
        format.html { redirect_to activity_path(params[:id]), notice: 'Activity was successfully created.' }
        format.json { render action: 'show', status: :created, location: @activity }
      else
        format.html { render action: 'new' }
        format.json { render json: @activity.errors, status: :unprocessable_entity }
      end
    end

=end
  end

  # PATCH/PUT /activities/1
  # PATCH/PUT /activities/1.json
  def update
    respond_to do |format|
      if @activity.update(activity_params)
        format.html { redirect_to @activity, notice: 'Activity was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @activity.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /activities/1
  # DELETE /activities/1.json
  def destroy
    @activity.destroy
    respond_to do |format|
      format.html { redirect_to activities_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activity
      @activity = Activity.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def activity_params
      params.require(:activity).permit(:name, :desc, :status_id, :category_id)
    end
=begin
  protected
      def authenticate
        authenticate_or_request_with_http_basic do |username, password|
          username == 'user' && password == 'pass'
        end
      end
=end
end
