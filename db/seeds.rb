# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Table.destroy_all
Waiter.destroy_all

w1 = Waiter.create(name:'Phil Collins', age: 26)
w2 = Waiter.create(name:'Collin Rae', age: 47)
w3 = Waiter.create(name:'Ray Jackson', age: 19)

w1.tables.create(seats:4)
w1.tables.create(seats:6)
w1.tables.create(seats:8)

w2.tables.create(seats:4)
w2.tables.create(seats:6)
w2.tables.create(seats:8)

w3.tables.create(seats:4)
w3.tables.create(seats:6)
w3.tables.create(seats:8)

