import { Div } from 'fancy-ui-react'
import { Modal } from 'fancy-ui-react'

function App() {

  return (
    <>
      <Div justify={'center'} mTop={'120px'}>
        <Modal side={'bottom'} trigger={
          <Div w={'120px'} justify={'center'}>Click!</Div>
          } >
            <Div justify={'center'} w={'120px'} >Hello, World!</Div>
          </Modal>
      </Div>
    </>
  )
}

export default App
