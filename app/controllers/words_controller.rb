class WordsController < ApplicationController
  def index
    @words = Word.where("subject_id = ?", params[:subject_id])
  end
end
