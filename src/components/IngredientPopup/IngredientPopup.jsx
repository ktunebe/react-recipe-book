import React from 'react'

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max))
}

function IngredientPopup({ anchorRect, name, description, maxWidthPx = 640 }) {
  const popupRef = React.useRef(null)
  const [top, setTop] = React.useState(12)

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
      className="fixed left-1/2 -translate-x-1/2 z-50 w-[92vw] rounded-2xl border border-black bg-white p-4 shadow-md"
      style={{ top, maxWidth: maxWidthPx }}
    >
      <p className="font-semibold">{name}</p>
      {description && <p className="mt-1 text-sm">{description}</p>}
    </div>
  )
}

export default IngredientPopup