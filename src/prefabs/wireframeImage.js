(() => ({
  name: 'WireframeImage',
  icon: 'ImageIcon',
  category: 'Wireframe',
  structure: [
    {
      name: 'WireframeImage',
      options: [
        {
          label: 'Image type',
          key: 'imgType',
          value: 'None',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              {
                name: 'None',
                value: 'None',
              },
              {
                name: 'Animals',
                value: 'animals',
              },
              {
                name: 'Architecture',
                value: 'architecture',
              },
              {
                name: 'Nature',
                value: 'nature',
              },
              {
                name: 'People',
                value: 'people',
              },
              {
                name: 'Tech',
                value: 'tech',
              },
            ]
          }
        },
        {
          value: [],
          label: 'Image url',
          key: 'imgUrl',
          type: 'VARIABLE',
        },
        {
          value: [],
          label: 'Image Alternative Text',
          key: 'imgAlt',
          type: 'VARIABLE',
        },
        {
          value: ['0rem', '0rem', 'M', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
        {
          type: 'SIZE',
          label: 'Width',
          key: 'width',
          value: '',
          configuration: {
            as: 'UNIT',
          },
        },
        {
          type: 'SIZE',
          label: 'Height',
          key: 'height',
          value: '',
          configuration: {
            as: 'UNIT',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
