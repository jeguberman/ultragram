class Images < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.integer :author_id, null:false
      t.string :caption

      t.timestamps
    end
  end
end
