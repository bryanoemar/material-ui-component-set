(() => ({
  name: 'CardActions',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { CardActions } = window.MaterialUI.Core;
    const isDev = B.env === 'dev';
    const isEmpty = children.length === 0;
    const isPristine = isEmpty && isDev;
    const builderLayout = () => (
      <div
        className={[
          isEmpty ? classes.empty : '',
          isPristine ? classes.pristine : '',
        ].join(' ')}
      >
        {isPristine ? 'Card Actions' : children}
      </div>
    );

    return isDev ? builderLayout() : <CardActions>{children}</CardActions>;
  })(),
  styles: () => () => ({
    empty: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '4rem',
      height: '100%',
      width: '100%',
      fontSize: '0.75rem',
      color: '#262A3A',
      textTransform: 'uppercase',
      boxSizing: 'border-box',
    },
    pristine: {
      borderWidth: '0.0625rem',
      borderColor: '#AFB5C8',
      borderStyle: 'dashed',
      backgroundColor: '#F0F1F5',
    },
  }),
}))();