(() => ({
  name: 'Drawer',
  icon: 'PanelIcon',
  category: 'DRAWER',
  structure: [
    {
      name: 'Drawer',
      options: [
        {
          value: true,
          label: 'Open on start?',
          key: 'isOpenOnStart',
          type: 'TOGGLE',
        },
        {
          value: true,
          label: 'Visible in dev?',
          key: 'isVisibleInDev',
          type: 'TOGGLE',
        },
        {
          type: 'CUSTOM',
          label: 'Anchor',
          key: 'anchor',
          value: 'left',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Left', value: 'left' },
              { name: 'Right', value: 'right' },
              { name: 'Top', value: 'top' },
              { name: 'Bottom', value: 'bottom' },
            ],
          },
        },
        {
          value: '240',
          label: 'Drawer width (pixels)',
          key: 'width',
          type: 'TEXT',
        },
        {
          type: 'VARIABLE',
          label: 'Title',
          key: 'drawerTitle',
          value: ['Title'],
        },
        {
          value: 'White',
          label: 'Title Color',
          key: 'color',
          type: 'COLOR',
        },
        {
          value: 'Primary',
          label: 'Panel Color',
          key: 'panelColor',
          type: 'COLOR',
        },
        {
          value: ['0rem', '0rem', 'M', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
      ],
      descendants: [
        {
          name: 'Box',
          options: [],
          descendants: [],
        }
      ],
    },
  ],
}))();
