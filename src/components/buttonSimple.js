(() => ({
  name: 'buttonSimple',
  icon: 'ButtonIcon',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Button } = window.MaterialUI.Core;

    const theSameComponent = <Button>{(options.trueFlow ? "interaction" : "no interaction" )}</Button>

    return <div>{theSameComponent}</div>

  })(),
  styles: B => t => {
  },
}))();
