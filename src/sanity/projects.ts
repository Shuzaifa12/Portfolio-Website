export default {
    name: 'Projects',
    type: 'document',
    title: 'Projects',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Project Name',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Project Description',
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'url',
        description: 'URL to the live project or GitHub repo',
        },
      {
        name: 'image',
        type: 'image',
        title: 'Project Image',
        options: {
          hotspot: true
        }
      }
    ],
  };