(() => ({
  name: 'buttonSimple',
  icon: 'ButtonIcon',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Button } = window.MaterialUI.Core;

    const ComponentInTrueFlow = <Button>interaction</Button>
    const ComponentInFalseFlow = <Button>no interaction</Button>

    return <div>{(options.trueFlow ? ComponentInTrueFlow : ComponentInFalseFlow )}</div>

  })(),
  styles: B => t => {
  },
}))();
