class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    enable_extension 'citext' unless extension_enabled?('citext')

    create_table :users do |t|
      t.citext :email, null: false
      t.string :password_digest, null: false

      t.timestamps
    end

    add_index :users, :email, unique: true, name: 'index_users_on_email'
  end
end
