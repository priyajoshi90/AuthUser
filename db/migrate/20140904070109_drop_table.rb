class DropTable < ActiveRecord::Migration
  def up
  	drop_table :statuses
  end
  def down
  	create_table :statuses do |t|
      t.string :title
      t.references :activity, index: true

      t.timestamps
    end
  end 
end
