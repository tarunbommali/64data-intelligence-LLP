import React from 'react'

const CardItem = ({ item }) => {
  return (
    <div className="h-72 w-56 min-[1024px]:w-52 min-[1100px]:w-56 shadow-md">
      <img src={item.imgurl} className="h-1/2 w-full" alt={`item-${item.id}`} />
      <div className="px-5">
        <h3 className="text-sm font-semibold mt-2 text-left">{item.headline}</h3>
        <p className="text-xs text-muted-foreground text-left mt-3">{item.body}</p>
      </div>
    </div>
  )
}

export default CardItem
