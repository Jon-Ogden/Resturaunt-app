class CreateTables < ActiveRecord::Migration[7.0]
  def change
    create_table :tables do |t|
      t.integer :seats
      t.belongs_to :waiter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
