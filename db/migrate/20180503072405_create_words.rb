class CreateWords < ActiveRecord::Migration[5.1]
  def change
    create_table :words do |t|
      t.text :face, null: false
      t.text :flip
      t.string :image_url
      t.timestamps
    end
  end
end
