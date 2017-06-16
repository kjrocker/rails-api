class HelixGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)

  def create_crate
    run "rails generate helix:crate #{snake_name}"
  end

  def replace_rakefile
    copy_file "Rakefile", "#{crate_dir}/Rakefile"
  end

  def create_specs
    # Insert rspec into dev dependencies
    insert_into_file "#{crate_dir}/#{snake_name}.gemspec",
      "s.add_development_dependency 'rspec', '~> 3.6'\n",
      after: "s.add_dependency 'helix_runtime', '~> 0.6.1'\n"
    # Create spec directory
    empty_directory "#{crate_dir}/spec/"
    # Copy spec template
    template "crate_spec.rb.erb", "#{crate_dir}/spec/#{snake_name}_spec.rb"
  end

  private

  def crate_dir
    "crates/#{snake_name}"
  end

  def camel_name
    @camel_name ||= file_name.camelize
  end

  def snake_name
    @snake_name ||= file_name.underscore
  end
end
