module Types
  class Country::CountryType < Types::BaseObject

    field :id,          ID, null: false, description: 'ID of the country, needed by the countryIds search parameter'

    field :title,       String, null: false, cache: { key: :updated_at }, description: 'Country name'
    field :count,       Integer, null: true, cache: { key: :updated_at }, description: 'Count of records with this country, may be null if not a part of a facet query'

    field :created_at,  GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at,  GraphQL::Types::ISO8601DateTime, null: false

  end
end
