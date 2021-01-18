class WordSerializer < ActiveModel::Serializer
  attributes :id, :spelling, :pos, :definition, :sentence, :student_id
end
