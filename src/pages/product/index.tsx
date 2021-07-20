import * as React from "react"
import { RouteComponentProps, useParams } from "react-router-dom"

type paramNames = {
  id: string
}
export default function Product(props: RouteComponentProps) {
  const { id } = useParams<paramNames>()
  React.useEffect(() => {
    console.log(id)
  }, [])
  return (
    <div className="flex flex-1 items-center justify-center">
      <h1 className="font-bold text-2xl text-gray-500">Product Page</h1>
    </div>
  )
}
