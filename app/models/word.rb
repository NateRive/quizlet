class Word < ApplicationRecord
  belongs_to :subject
  validates :flip, presence: true
end
