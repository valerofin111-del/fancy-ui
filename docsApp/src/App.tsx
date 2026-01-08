import { Alert, Div, Menu, Progress, Separator } from 'fancy-ui-react'
import { Modal } from 'fancy-ui-react'
import { Switch } from 'fancy-ui-react'
import { Notification } from 'fancy-ui-react'
import './index.css'
import { useState } from 'react'

interface Div123Types {
  children?: React.ReactNode
}

var Div123 = ({ children } : Div123Types ) => {
  return (
    <Div justify={'center'}> {children} </Div>
  )
}

var App = function () {

  var [ state, setState ] = useState<number>(50)

  return (
    <>
      <Div direction={'row'} gap={'120px'} justify={'center'} >

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
          <Progress className='progress' w={'120px'} h={'12px'} color={'black'} progress={`${state}%`}/>
          <button onClick={() => setState(prev => prev - 5)}>- progress bar</button>
          <button onClick={() => setState(prev => prev + 5)}>+ progress bar</button>
        </Div>


        <Div123>
          <Alert gap={'120px'} direction={'row'} bgOpacity={0.55} color={'gray'} w={'360px'} h={'480px'} trigger={<Div123>Trigger</Div123>} action={<button>Action</button>} close={<button style={{ padding: 'auto' }}>Close</button>} >
            <Div123>Alert!!!</Div123>
          </Alert>
        </Div123>

        <Separator length={'120px'} thickness={'2px'} orientation={'vertical'} color={'black'} />

        <Div123>
          <Notification mTop={'12px'} w={'220px'} h={'120px'} gap={'12px'} color={'gray'} action={<p>Action</p>} close={<p>Close</p>} mBottom={'auto'} trigger={<p>say Hello</p>} >Hello!!!</Notification>
        </Div123>

        <Menu side={'top'} trigger={<button>123</button>} items={{ 1: <p>1</p>, 2: <p>2</p>, 3: <p>3</p> }} />

      </Div>
    </>
  )
}

export default App
