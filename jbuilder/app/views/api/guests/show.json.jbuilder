json.extract! @guest, :name, :age, :favorite_color

json.array! @guest.gifts do |gift|
  json.gifts  gift.title
end
  # debugger

json.name @guest.name
json.age @guest.age
json.favorite_color @guest.favorite_color
json.gifts do
  json.array! @guest.gifts do |gift|
  json.gifts  gift.title
end
end
