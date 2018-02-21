class CreateIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :ingredients do |t|
      t.string :title
      t.string :class_ingred

      t.timestamps
    end
  end
end
