class Subject < ApplicationRecord
  belongs_to :user
  has_many :words, dependent: :destroy
  has_many :subject_folders
  has_many :folders, through: :subject_folders
  accepts_nested_attributes_for :words, reject_if: :reject_both_blank, allow_destroy: true
  validates :title, presence: true

  def reject_both_blank(attributes)
    if attributes[:id]
      if attributes[:face].blank? and attributes[:flip].blank? and attributes[:image].blank?
        attributes.merge!(_destroy: "1")
        !attributes[:face].blank? and attributes[:flip].blank? and attributes[:image].blank?
      end
    else
      attributes[:face].blank? and attributes[:flip].blank? and attributes[:image].blank?
    end
  end
end
