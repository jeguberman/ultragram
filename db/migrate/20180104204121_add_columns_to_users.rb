class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change

    change_table :users do |t|
      t.string :profile_picture_url
      t.string :personal_statement
      t.string :fullname, null: false

    end
  end
end
