class CreateChecklists < ActiveRecord::Migration
  def change
    create_table :checklists do |t|
      t.string :name
      t.string :tag

      t.timestamps
    end
  end
end
