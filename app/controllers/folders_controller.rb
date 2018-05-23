class FoldersController < ApplicationController

  def create
    folder = Folder.new(create_params)
    if folder.save!
      redirect_to "/", notice: "フォルダを作成しました。"
    else

    end
  end

  def show
    @folder = Folder.find(params[:id])
    @all_subjects = current_user.subjects
    @subjects = Folder.find(params[:id]).subjects
  end

  def update
    @folder = Folder.find(params[:id])
    if params.has_key?(:folder)
      if params[:folder].has_key?(:title)
        @folder.update(create_params)
        redirect_to folder_path(@folder)
      elsif params[:folder].has_key?(:subject_ids)
        @folder.update(update_params)
        redirect_to folder_path(@folder)
      end
    else
      SubjectFolder.where(folder_id: @folder.id).destroy_all
      redirect_to folder_path(@folder)
    end
  end

  private
  def create_params
    params.require(:folder).permit(:title).merge(user_id: current_user.id)
  end

  def update_params
    params.require(:folder).permit({ subject_ids: [] })
  end
end
