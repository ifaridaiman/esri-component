import React, { ReactInstance, ReactNode } from 'react'

type Props = {
    children:ReactNode;
}

const CardWrapper:React.FC<Props> = ({
    children
}) => {
  return (
    <div className='max-w-sm w-full lg:max-w-full'>
        <div className='border p-4 rounded-md'>
            {children}
        </div>
    </div>
  )
}

export default CardWrapper