(() => ({
    name: 'Increment',
    type: 'CONTAINER_COMPONENT',
    allowedTypes: ['BODY_COMPONENT', 'CONTENT_COMPONENT'],
    orientation: 'HORIZONTAL',
    jsx: (() => {
        const [amount, setAmount] = useState(0)
        
        useEffect(() => {
            B.defineFunction('Increment', e => setAmount(n => n + 1));
          }, []);

        return <p>Increment {amount}</p>
    })(),
    styles: B => theme => {
    },
  }))();
  