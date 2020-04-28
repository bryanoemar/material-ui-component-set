(() => ({
  name: 'buttonSimple',
  icon: 'ButtonIcon',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const ComponentInTrueFlow = <button>interaction</button>
    const ComponentInFalseFlow = <button>no interaction</button>
    
    return <div>{(options.trueFlow ? ComponentInTrueFlow : ComponentInFalseFlow )}</div>
  })(),
  styles: B => t => {
  },
}))();
