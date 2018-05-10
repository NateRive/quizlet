class Word < ApplicationRecord
  belongs_to :subject
  validates :face_or_flip, presence: true

  def face_or_flip
    face.presence or flip.presence
  end
end
