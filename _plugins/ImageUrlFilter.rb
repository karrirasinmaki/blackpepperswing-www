module Jekyll
  module ImageUrlFilter
    def imgurl(input, opts={})
      puts "URLIMG"
      puts input
      if input.include? "://"
        puts "--ext"
        # is external url
        return input
      end
      size = opts["size"]
      if size.nil?
        size = ""
      else
        size = "#{size}/"
      end
      urlimg = @context.registers[:site].config["urlimg"] || "/"
      "#{urlimg}#{size}#{input}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::ImageUrlFilter)
