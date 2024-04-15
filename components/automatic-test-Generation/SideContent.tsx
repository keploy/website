import React from 'react'
import HorizontalLinearStepper from './stepper'
import ContentStarting from './ContentStarting'
import ContentMid from './ContentMid'
import ContentLast from './ContentLast'
import Completed from './Completed'
const SideContent = () => {
  return (
    <div className='p-5'>
      <HorizontalLinearStepper>
        <ContentStarting/>
        <ContentMid/>
        <ContentLast/>
        <Completed/>
      </HorizontalLinearStepper>
    </div>
  )
}

export default SideContent
