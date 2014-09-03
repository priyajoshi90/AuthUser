json.array!(@activities) do |activity|
  json.extract! activity, :id, :name, :desc
  json.url activity_url(activity, format: :json)
end
