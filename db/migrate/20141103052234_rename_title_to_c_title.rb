class RenameTitleToCTitle < ActiveRecord::Migration
  def up
  	rename_column :categories, :title, :c_title
  end
  def down
  	rename_column :categories, :c_title, :title
  end
end
