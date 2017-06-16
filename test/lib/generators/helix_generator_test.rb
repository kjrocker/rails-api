require 'test_helper'
require 'generators/helix/helix_generator'

class HelixGeneratorTest < Rails::Generators::TestCase
  tests HelixGenerator
  destination Rails.root.join('tmp/generators')
  setup :prepare_destination

  # test "generator runs without errors" do
  #   assert_nothing_raised do
  #     run_generator ["arguments"]
  #   end
  # end
end
