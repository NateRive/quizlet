class AddColumnsToSeveral < ActiveRecord::Migration[5.1]
  def change
    add_reference :subjects, :folder, foreign_key: true
  end
end
