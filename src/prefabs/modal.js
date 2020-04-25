(() => ({
  name: 'Modal',
  icon: 'PanelIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Modal',
      options: [
        {
          type: 'VARIABLE',
          label: 'Title',
          key: 'panelTitle',
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
      ],
    },
  ],
}))();
