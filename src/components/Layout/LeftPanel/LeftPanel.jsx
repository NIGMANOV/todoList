import React from 'react'
import "./LeftPanel.scss"

function LeftPanel({children}) {
  return (
    <div className='left_panel'>{children}</div>
  )
}

export default LeftPanel