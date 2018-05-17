class Word < ApplicationRecord
  belongs_to :subject
  mount_uploader :image, ImageUploader

end
