import React from 'react'

type Props = {
    title:string
}

export const Question = ({title}: Props) => {
  return (
    <h1 className=' text-4xl text-black/85 font-bold tracking-wide leading-[120%] '>{title}</h1>
  )
}