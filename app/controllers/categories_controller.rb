class CategoriesController < ApplicationController
  def new
  	@category = Category.new
  end

  def create
  	@category = Category.new(category_params)
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
  	params.require(:category).permit(:title)
  end
end
