# == Schema Information
#
# Table name: guides
#
#  id         :bigint           not null, primary key
#  title      :string
#  published  :boolean          default(TRUE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Guide, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
