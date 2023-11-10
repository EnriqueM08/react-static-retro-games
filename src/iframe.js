import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export const IFrame = ({
  children,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null)
  const mountNode =
    contentRef?.contentWindow?.document?.body

  return (
    <iframe {...props} ref={setContentRef} id = "frame"
        frameborder="1" title='game' width={"640px"} height={"480px"}
        max-width={"100%"}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  )
}