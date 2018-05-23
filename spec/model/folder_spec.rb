require "rails_helper"

RSpec.describe Folder, type: :model do
  describe "#create" do
    let(:user) { create(:user) }
    let(:folder) { build(:folder) }
    context "can save" do
      it "is valid with title, existing user_id" do
        folder.user_id = user.id
        expect(folder).to be_valid
      end
    end

    context "can not save" do
      it "is valid without existing user_id" do
        folder.user_id = user.id + 1
        folder.valid?
        expect(folder.errors[:user][0]).to include("must exist")
      end

      it "is invalid without title" do
        folder.user_id = user.id
        folder.title = ""
        folder.valid?
        expect(folder.errors[:title][0]).to include("can't be blank")
      end
    end
  end
 end
