class SubjectsController < ApplicationController
  def index
  end

  def new
    @subject = Subject.new
    5.times { @subject.words.build }
  end

  def create
    binding.pry
    subject = Subject.new(create_params)
    if subject.save
      redirect_to  subjects_path, notice: "学習セットを作成しました。"
    else
      @subject = Subject.new
      5.times { @subject.words.build }
      render :new
      # もともと書いていた内容を保持するコードを書く！
    end

  end

  private
  def create_params
    params.require(:subject).permit(:title, words_attributes: [:face, :flip]).merge(user_id: current_user.id)
  end
end
