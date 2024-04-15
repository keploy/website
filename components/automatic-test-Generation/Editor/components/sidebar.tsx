import React, {ReactNode} from 'react';
import styled from "@emotion/styled"
export const Sidebar = ({children}: { children: ReactNode }) => {
  return (
    <Aside className=' overflow-y-auto'>
      {children}
    </Aside>
  )
}

const Aside = styled.aside`
  width: 250px;
  height: 60vh;
  border-right: 2px solid;
  border-color: #242424;
  padding-top: 3px;
`

export default Sidebar
