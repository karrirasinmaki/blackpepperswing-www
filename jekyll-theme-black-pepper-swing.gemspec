# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-black-pepper-swing"
  spec.version       = "0.1.0"
  spec.authors       = ["Karri Rasinmäki"]
  spec.email         = ["karri.rasinmaki@gmail.com"]

  spec.summary       = "Black Pepper Swing website. Based on Jekyll theme »Feeling Responsive«."
  spec.homepage      = "https://github.com/karrirasinmaki/blackpepperswing-www"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
