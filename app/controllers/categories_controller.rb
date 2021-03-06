class CategoriesController < ApplicationController
  def new
  	@category = Category.new
  end

  def index
    if current_user
      @categories = Category.all
      respond_to do |format|
        format.json{ render json: @categories }
      end
      else
      return false
      #flash[:notice] = "You are not authorized to perform this action"
    end
  end

  def create
  	@category = Category.new(category_params)
    respond_to do |format|
      if @category.save
        format.json{ render json: @category }
      else
        format.json{ render json: @category.errors }
      end
    end
  end

  def edit
  	@category = Category.find(params[:id])
  end

  def update
  	respond_to do |format|
      if @category.update(category_params)
        format.html { redirect_to @category, notice: 'Category was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
  	@category.destroy
    respond_to do |format|
      format.html { redirect_to categories_url }
      format.json { head :no_content }
    end
  end

  private

  def category_params
  	params.require(:category).permit(:c_title)
  end
end
