class Subject < ApplicationRecord
  belongs_to :user
  has_many :words, dependent: :destroy
  accepts_nested_attributes_for :words, reject_if: :reject_both_blank, allow_destroy: true
  validates :title, presence: true

  def reject_both_blank(attributes)
    if attributes[:id]
      attributes.merge!(_destroy: "1") if attributes[:face].blank? and attributes[:flip].blank? and attributes[:image].blank?
      !attributes[:face].blank? and attributes[:flip].blank?
    else
      attributes[:face].blank? and attributes[:flip].blank? and attributes[:image].blank?
    end
  end
end
