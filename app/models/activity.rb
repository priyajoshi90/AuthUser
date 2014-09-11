class Activity < ActiveRecord::Base
	belongs_to :user
	belongs_to :status
	belongs_to :category
end
