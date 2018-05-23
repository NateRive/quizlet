class CreateSubjectFolders < ActiveRecord::Migration[5.1]
  def change
    create_table :subject_folders do |t|
      t.references :folder, foreign_key: true
      t.references :subject, foreign_key: true
      t.timestamps
    end
  end
end
