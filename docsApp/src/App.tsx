import { Div } from 'fancy-ui-react'
import { Modal } from 'fancy-ui-react'
import { Switch } from 'fancy-ui-react'

function App() {

  return (
    <>
      <Div justify={'center'} mTop={'120px'}>
        <Modal side={'bottom'} trigger={
          <Div w={'120px'} justify={'center'}>Click!</Div>
          } close={<Div justify={'center'} w={'120px'}>Close</Div>} >
            <Div justify={'center'} w={'120px'} >Hello, World!</Div>
          </Modal>

          <Div justify={'center'} mTop={'120px'} >
            <Switch side={'bottom'} triggers={{ 1: <p>trigger_1</p>, 2: <p>trigger_2</p> }} contents={{ 1: <p>content_1</p>, 2: <p>content_2</p> }} close={<p>Close</p>} >Hello</Switch>
          </Div>
      </Div>
    </>
  )
}

export default App
