class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :nickname, :email
  has_many :words
end
