# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Student.destroy_all
Word.destroy_all

abe = Student.create(name: "Abraham A.", nickname: "abe", email: "abe@email.com")
america = Word.create(spelling: "America", pos: "noun", definition: "a North American country, the United States of America", sentence: "I am a citizen of America now.", student_id: 1)
