class AddSlugToChecklists < ActiveRecord::Migration
  def change
    add_column :checklists, :slug, :string
    add_index :checklists, :slug
  end
end
