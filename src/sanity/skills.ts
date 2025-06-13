export default {
    name: 'Skills',
    type: 'document',
    title: 'Skills',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Skill Name',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Skill Image',
        options: {
          hotspot: true
        }
      }
    ]
};
