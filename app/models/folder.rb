class Folder < ApplicationRecord
  has_many :subject_folders
  has_many :subjects, through: :subject_folders
  belongs_to :user
  validates :title, presence: true
end
