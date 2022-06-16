class Waiter < ApplicationRecord
    has_many :tables, dependent: :destroy
end
