# debugger
# @guests.each do |guest|
#   debugger
#   json.extract! guest, :name
# end

json.array! @guests do |guest|
  json.extract! guest, :name
end