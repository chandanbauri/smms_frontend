import * as React from "react"
import { RouteComponentProps } from "react-router-dom"

export default function Home(props: RouteComponentProps) {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="font-bold text-2xl text-gray-500">Home Page</h1>
    </div>
  )
}
