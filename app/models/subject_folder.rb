class SubjectFolder < ApplicationRecord
  belongs_to :folder
  belongs_to :subject
end
