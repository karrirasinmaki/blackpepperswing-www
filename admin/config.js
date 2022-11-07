const fs = require('fs');
const YAML = require('json-to-pretty-yaml');

let config = {
}

function writeRules(data) {
	let filePath = 'config.yml'
	fs.writeFile(filePath, data, function(err, data) {
		if (err) console.log(err)
		console.log(`Rules written to file '${filePath}'.`)
	})
}

function rules(rules) {
  writeRules(YAML.stringify(rules))
}

let defaultFields = [
  { label: 'Title', name: 'title', widget: 'string' },
  { label: 'Subheading', name: 'subtitle', widget: 'string' },
  { label: 'Teaser', name: 'teaser', widget: 'text' },

  { label: 'Image', name: 'image', widget: 'object', fields: [
    { label: 'Image', name: 'src', widget: 'image', allow_multiple: false },
    { label: 'Caption', name: 'caption', widget: 'string' },
    { label: 'Caption URL', name: 'caption_url', widget: 'string' },
  ]},

  { label: 'Permalink', name: 'permalink', widget: 'string' },

  { label: 'Publish Date', name: 'date', widget: 'datetime' },
  { label: 'Update Date', name: 'last_modified_at', widget: 'datetime' },
  { label: 'Body', name: 'body', widget: 'markdown' },
]


rules({
  backend: {
    name: 'github',
    repo: 'karrirasinmaki/blackpepperswing-www',
    branch: 'netlifycms'
  },
  media_folder: '_original_images',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      folder: 'pages/',
      nested: {
        depth: 10
      },
      fields: [
        ...defaultFields,
        { label: 'Layout', name: 'layout', widget: 'hidden', default: 'page' },
      ]
    },
    {
      name: 'blog',
      label: 'Blog',
      folder: '_posts/',
      create: true,
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
      fields: [
        ...defaultFields,
        { label: 'Layout', name: 'layout', widget: 'hidden', default: 'page' },
        { label: 'Tags', name: 'tags', widget: 'list' },
      ]
    },
    {
      name: 'events',
      label: 'Events',
      folder: '_events/',
      fields: [
        ...defaultFields,
        { label: 'Layout', name: 'layout', widget: 'hidden', default: 'page' },
      ]
    }
  ]
})
