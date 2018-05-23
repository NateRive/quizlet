require "rails_helper"

RSpec.describe User, type: :model do
  describe "#create" do
    let(:user) { create(:user) }
    context "can save" do
      it "is valid with email, password, name, ps_confirmation" do
        expect(user).to be_valid
      end

      it "is valid if password_length is 6 characters" do
        user.password = Faker::Internet.password(6, 6)
        user.password_confirmation = user.password
        expect(user).to be_valid
      end

      it "is valid if password_length is 7 characters" do
        user.password = Faker::Internet.password(7, 7)
        user.password_confirmation = user.password
        expect(user).to be_valid
      end
    end

    context "can not save" do
      it "is invalid if password_length is 5 characters" do
        user.password = Faker::Internet.password(5, 5)
        user.password_confirmation = user.password
        user.valid?
        expect(user.errors[:password][0]).to include("too short")
      end

      it "is invalid if same email already exists" do
        another_user = build(:user)
        another_user.email = user.email
        another_user.valid?
        expect(another_user.errors[:email][0]).to include("has already been taken")
      end
    end
  end
end
