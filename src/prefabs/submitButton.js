(() => ({
  name: 'SubmitButton',
  icon: 'SubmitButtonIcon',
  category: 'FORM',
  structure: [
    {
      name: 'SubmitButton',
      options: [
        {
          type: 'VARIABLE',
          label: 'Button text',
          key: 'buttonText',
          value: ['Button'],
        },
        {
          value: false,
          label: 'Full width',
          key: 'fullWidth',
          type: 'TOGGLE',
        },
        {
          type: 'CUSTOM',
          label: 'variant',
          key: 'variant',
          value: 'contained',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Text', value: 'text' },
              { name: 'Outlined', value: 'outlined' },
              { name: 'Contained', value: 'contained' },
            ],
          },
        },
        {
          value: 'medium',
          label: 'Size',
          key: 'size',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Medium', value: 'medium' },
              { name: 'Small', value: 'small' },
            ],
          },
        },
        {
          type: 'COLOR',
          label: 'Background color',
          key: 'background',
          value: 'Success',
        },
      ],
      descendants: [],
    },
  ],
}))();
