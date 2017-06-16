class HelixGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  class_option :test, type: :string, default: 'minitest'

  VALID_TEST_GEMS = [:minitest, :rspec]

  def check_test_framework
    raise ArgumentError unless VALID_TEST_GEMS.include?(test_framework)
  end

  def create_crate
    run "rails generate helix:crate #{snake_name}"
  end

  def install_tests
    if test_framework == :minitest
      replace_rakefile('minitest')
      add_development_gem('minitest')
      empty_directory "#{crate_dir}/test/"
      create_tests
    elsif test_framework == :rspec
      replace_rakefile('rspec')
      add_development_gem('rspec')
      empty_directory "#{crate_dir}/spec/"
      create_specs
    else
      raise ArgumentError
    end
  end

  private

  def replace_rakefile(dir)
    copy_file "#{dir}/Rakefile", "#{crate_dir}/Rakefile", force: true
  end

  def add_development_gem(gem_name)
    insert_into_file "#{crate_dir}/#{snake_name}.gemspec",
      "  s.add_development_dependency '#{gem_name}'\n",
      after: "s.add_dependency 'helix_runtime', '~> 0.6.1'\n"
  end

  def create_tests
    template "minitest/crate_test.rb.erb", "#{test_dir}/#{snake_name}_test.rb"
    template "minitest/test_helper.rb.erb", "#{test_dir}/test_helper.rb"
  end

  def create_specs
    template "rspec/crate_spec.rb.erb", "#{test_dir}/#{snake_name}_spec.rb"
    template "rspec/test_helper.rb.erb", "#{test_dir}/test_helper.rb"
  end

  def test_dir
    @test_dir ||=
      test_framework == :minitest ? "#{crate_dir}/test" : "#{crate_dir}/spec"
  end

  def crate_dir
    "crates/#{snake_name}"
  end

  def test_framework
    @test_framework ||= options[:test].downcase.to_sym
  end

  def camel_name
    @camel_name ||= file_name.camelize
  end

  def snake_name
    @snake_name ||= file_name.underscore
  end
end
