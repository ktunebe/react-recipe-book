import React from 'react'
import { capitalize } from '../../assets/utils/helpers'

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max))
}

function IngredientPopup({ anchorRect, ingredientName, ingredientDescription, maxWidthPx = 640 }) {
  const popupRef = React.useRef(null)
  const [top, setTop] = React.useState(12)
  const shoppingLink = `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(ingredientName + ' grocery')}`

  React.useLayoutEffect(() => {
    if (!popupRef.current) return

    const gap = 10
    const padding = 12

    const popupHeight = popupRef.current.getBoundingClientRect().height

    const topIfAbove = anchorRect.top - gap - popupHeight
    const topIfBelow = anchorRect.bottom + gap

    const fitsAbove = topIfAbove >= padding
    const fitsBelow = topIfBelow + popupHeight <= window.innerHeight - padding

    let chosenTop
    if (fitsAbove) {
      chosenTop = topIfAbove
    } else if (fitsBelow) {
      chosenTop = topIfBelow
    } else {
      // fallback: clamp within viewport
      chosenTop = clamp(topIfBelow, padding, window.innerHeight - popupHeight - padding)
    }

    setTop(chosenTop)
  }, [anchorRect])

  return (
    <div
      ref={popupRef}
      onMouseDown={(e) => e.stopPropagation()}
      className="fixed left-1/2 -translate-x-1/2 z-50 w-[92vw] rounded-2xl border-2 border-accent bg-background/90 p-4 shadow-md"
      style={{ top, maxWidth: maxWidthPx }}
    >
      <p className="font-semibold text-lg">{capitalize(ingredientName)}</p>
      {ingredientDescription && <p className="my-3">{ingredientDescription}</p>}
      <p className=' text-accent hover:underline underline-offset-2'>
        <a href={shoppingLink} target='_blank' rel="noopener noreferrer">{`Shop for ${ingredientName} `}&rarr;</a>
      </p>
    </div>
  )
}

export default IngredientPopup