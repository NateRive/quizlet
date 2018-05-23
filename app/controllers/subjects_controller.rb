class SubjectsController < ApplicationController
  before_action :set_subject, only: [:show, :edit, :update]
  def index
    @subjects = Subject.where("user_id = ?", current_user.id).includes(:user)
    @folder = Folder.new
  end

  def new
    @subject = Subject.new
    5.times { @subject.words.build }
  end

  def create
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

  def show

  end

  def edit
  end

  def update
    @subject.update(create_params)
    redirect_to "/"
  end

  private
  def create_params
    params.require(:subject).permit(:title, words_attributes: [:face, :flip, :image, :id]).merge(user_id: current_user.id)
  end

  def set_subject
    @subject = Subject.find(params[:id])
  end
end
