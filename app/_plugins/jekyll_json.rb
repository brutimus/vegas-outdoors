require 'json'

module Jekyll
    class JSONTag < Liquid::Tag
        def initialize(tag_name, text, tokens)
            @key = text.strip
            @hash_to_jsonify = Jekyll.configuration({})[@key]
            super
        end
        def render(context)
            return context[@key].to_json
        end
    end

    def yaml_to_json(yaml)
        return yaml.to_json
    end
end

Liquid::Template.register_tag('yaml_to_json', Jekyll::JSONTag)
Liquid::Template.register_filter(Jekyll)