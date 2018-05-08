class Subject < ApplicationRecord
  belongs_to :user
  has_many :words, dependent: :destroy

  accepts_nested_attributes_for :words, reject_if: proc { |attribute| attribute["flip"].blank? }
  validates :title, presence: true
end
