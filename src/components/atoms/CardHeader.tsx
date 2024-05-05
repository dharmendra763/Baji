import { ReactNode } from 'react'

function CardHeader({children}: {children: ReactNode}) {
  return (
    <h3 className="border-l-4 pl-2 border-blue-400">{children}</h3>
  )
}

export default CardHeader