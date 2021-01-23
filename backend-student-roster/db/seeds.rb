# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Student.destroy_all
Word.destroy_all

abe = Student.create(name: "Abraham A.", nickname: "Abe", email: "abe@email.com")
america = Word.create(spelling: "America", pos: "noun", definition: "a North American country, the United States of America", sentence: "I am a citizen of America now.", student_id: 1)
accident = Word.create(spelling: "accident", pos: "noun", definition: "unexpected event", sentence: "There was a car accident on my street.", student_id: 1)
always = Word.create(spelling: "always", pos: "adverb", definition: "every time", sentence: "My wife says I always snore.", student_id: 1)

bea = Student.create(name: "Beatrice B.", nickname: "Bea", email: "bea@email.com")
better = Word.create(spelling: "better", pos: "adjective", definition: "superior", sentence: "I feel better today.", student_id: 2)
brave = Word.create(spelling: "brave", pos: "adjective", definition: "courageous", sentence: "It was brave to leave my country and come to America.", student_id: 2)

cc = Student.create(name: "Celia C.", nickname: "CC", email: "cc@email.com")
citizen = Word.create(spelling: "citizen", pos: "noun", definition: "member of a nation", sentence: "I am an American citizen.", student_id: 3)

dee = Student.create(name: "DeAnna D.", nickname: "Dee", email: "dee@email.com")
winter = Word.create(spelling: "winter", pos: "noun", definition: "cold season", sentence: "Winter is my favorite season.", student_id: 4)
spring = Word.create(spelling: "spring", pos: "noun", definition: "season of growth", sentence: "It's spring and my garden is bursting with produce.", student_id: 4)
summer = Word.create(spelling: "summer", pos: "noun", definition: "hot sunny season", sentence: "In the summer we go to the beach.", student_id: 4)
fall = Word.create(spelling: "fall", pos: "noun", definition: "season of decline", sentence: "The fall is a very colorful season.", student_id: 4)
