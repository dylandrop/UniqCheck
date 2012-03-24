class AddCompletedToChecks < ActiveRecord::Migration
  def change
    add_column :checks, :completed, :boolean
  end
end
