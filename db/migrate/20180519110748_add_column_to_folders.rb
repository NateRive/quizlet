class AddColumnToFolders < ActiveRecord::Migration[5.1]
  def change
    add_column :folders, :title, :string
    add_index :folders, :title, unique: true
  end
end
