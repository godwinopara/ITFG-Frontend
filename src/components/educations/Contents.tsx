import React from 'react'

type Props = {
    desc:string
}

export const Contents = ({desc}: Props) => {
  return (
    <p className=" text-xl text-[#575c65] leading-10 ">{desc}</p>
  )
}