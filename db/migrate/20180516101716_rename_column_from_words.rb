class RenameColumnFromWords < ActiveRecord::Migration[5.1]
  def change
    rename_column :words, :image_url, :image
  end
end
