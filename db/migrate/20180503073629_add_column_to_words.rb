class AddColumnToWords < ActiveRecord::Migration[5.1]
  def change
    add_reference :words, :subject, foreign_key: true
  end
end
