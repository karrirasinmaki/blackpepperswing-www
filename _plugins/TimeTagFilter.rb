require 'date'

module Jekyll
  module TimeTagFilter
    def time_tag(input, opts={})
       if input.is_a? Date
          d = input
       else
          d = input ? DateTime.parse(input) : DateTime.new()
       end
       format = opts["format"]
       if format.nil?
          format = @context.registers[:site].config[:date_format] || "%d %B %Y"
       end
       "<time datetime=\"#{d.to_s}\">#{d.strftime(format)}</time>"
    end
  end
end

Liquid::Template.register_filter(Jekyll::TimeTagFilter)
