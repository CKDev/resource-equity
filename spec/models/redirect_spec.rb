# == Schema Information
#
# Table name: redirects
#
#  id         :bigint           not null, primary key
#  from       :string
#  to         :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Redirect, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
