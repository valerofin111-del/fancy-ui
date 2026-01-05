import { Div } from '../../fancy-ui-react/index'
import { Modal } from '../../fancy-ui-react/index'

export function App() {
  return (
    <div className="app">
      <Div p={'20px'} mTop={'120px'} justify={'center'} direction={'row-reverse'} >
        <p>hello, world!</p>
        <p>hello, world!</p>
      </Div>
      <Div mTop={'120px'} justify={'center'} >
        Hello, World!
      </Div>
    </div>
  );
}

export default App;
