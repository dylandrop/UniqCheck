class Checklist < ActiveRecord::Base
  extend FriendlyId
  friendly_id :tag, use: :slugged
  
  
  validates_presence_of :name
  
  has_many :checks
  accepts_nested_attributes_for :checks, :reject_if => lambda { |a| a[:name].blank? }, :allow_destroy => true
end
