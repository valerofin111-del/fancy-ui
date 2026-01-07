import { Alert, Div, Progress } from 'fancy-ui-react'
import { Modal } from 'fancy-ui-react'
import { Switch } from 'fancy-ui-react'
import './index.css'
import { useState } from 'react'

interface Div123Types {
  children?: React.ReactNode
}

var Div123 = ({ children } : Div123Types ) => {
  return (
    <Div justify={'center'} mTop={'12px'} gap={'12px'}> {children} </Div>
  )
}

var App = function () {

  var [ state, setState ] = useState<number>(0)

  return (
    <>
      <Div direction={'row'} gap={'120px'} justify={'center'}>

        <Div123>
          <Modal side={'bottom'} trigger={
            <Div123>Click!</Div123>
            } close={<Div123>Close</Div123>} >
              <Div123>Hello</Div123>
            </Modal>
        </Div123>

        <Div123>
          <Switch side={'bottom'} 
            triggers={{ 1: <Div123>trigger_1</Div123>, 2: <Div123>trigger_2</Div123> }} 
            contents={{ 1: <Div123>content_1</Div123>, 2: <Div123>content_2</Div123> }} 
            close={<Div123>Close</Div123>} 
          >
            <Div123>Hello</Div123>
          </Switch>
        </Div123>

        <Div justify={'center'} direction={'column-reverse'}>
          <Progress className='progress' m={'120px'} w={'120px'} h={'12px'} color={'black'} progress={`${state}%`}/>
          <button onClick={() => setState(prev => prev - 5)}>- progress bar</button>
          <button onClick={() => setState(prev => prev + 5)}>+ progress bar</button>
        </Div>

        <Div123>
          <Alert bgOpacity={0.55} color={'white'} w={'360px'} h={'480px'} trigger={<Div123>Trigger</Div123>} action={<Div123>Action</Div123>} close={<Div123>Close</Div123>} >
            <Div123>Alert!!!</Div123>
          </Alert>
        </Div123>

      </Div>
    </>
  )
}

export default App
