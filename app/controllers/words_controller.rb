class WordsController < ApplicationController
  def index
    @words = Word.where("subject_id = ?", params[:id])
  end
end
