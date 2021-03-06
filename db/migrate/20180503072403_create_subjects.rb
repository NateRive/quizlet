class CreateSubjects < ActiveRecord::Migration[5.1]
  def change
    create_table :subjects do |t|
      t.string :title, null: false, unique: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
