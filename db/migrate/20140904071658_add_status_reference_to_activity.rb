class AddStatusReferenceToActivity < ActiveRecord::Migration
  def change
    add_reference :activities, :status, index: true
  end
end
