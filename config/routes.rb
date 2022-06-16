Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :waiters do
      resources :tables
    end
    get '/tables', to:'tables#all_tables'
  end

end
