class CreateAccessTokens < ActiveRecord::Migration[5.2]
  def change
    create_table :access_tokens do |t|
      t.string :title
      t.string :token
      t.references :user, foreign_key: true

      t.timestamps
    end

    add_index :access_tokens, :token, unique: true
  end
end
