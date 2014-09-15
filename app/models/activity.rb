class Activity < ActiveRecord::Base
	belongs_to :user
	belongs_to :status
	belongs_to :category

	def as_json(options={})
  		super(:only => [:name,:desc,:created_at,:updated_at])
	end
end
