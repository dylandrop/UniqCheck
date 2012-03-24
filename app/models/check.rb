class Check < ActiveRecord::Base
  validates_presence_of :name
  belongs_to :checklist
end
