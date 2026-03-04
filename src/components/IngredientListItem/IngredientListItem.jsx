import React from 'react'
import { fractify, capitalize, pluralize } from '../../assets/utils/helpers.js'
import IngredientPopup from '../IngredientPopup'

function IngredientListItem({ ingredient, recipeMultiplier, activePopupId, setActivePopupId }) {
  const [isChecked, setIsChecked] = React.useState(false)
  const [anchorRect, setAnchorRect] = React.useState(null)

  const triggerRef = React.useRef(null)

  const isPopupVisible = activePopupId === ingredient.ref
  const { instance, note, prep, quantity, unit } = ingredient

  const updatedQuantity = quantity * recipeMultiplier
  const { whole, fraction } = fractify(updatedQuantity)

  const handleCheckboxChange = () => setIsChecked(prev => !prev)

  const handleIngredientClick = (e) => {
    e.stopPropagation()

    const rect = triggerRef.current?.getBoundingClientRect()
    if (rect) setAnchorRect(rect)

    setActivePopupId(prev => (prev === ingredient.ref ? null : ingredient.ref))
  }

  // Clear stale anchor when popup closes
  React.useEffect(() => {
    if (!isPopupVisible) setAnchorRect(null)
  }, [isPopupVisible])

  return (
    <li className="flex items-start my-1.5">
      <input
        type="checkbox"
        className="checkbox border-black border-2 mr-2 self-start mt-1.5"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      <div className={isChecked ? 'italic text-gray-500' : ''}>
        {updatedQuantity != null && (
          <span>
            {whole !== 0 && `${whole} `}
            {fraction !== 0 && `${fraction} `}
          </span>
        )}

        {unit && <span>{`${updatedQuantity > 1 ? pluralize(unit) : unit} `}</span>}
        {note && <span>{`${note} `}</span>}

        <span className="inline-block">
          <button
            ref={triggerRef}
            className="underline decoration-dotted underline-offset-3 hover:cursor-pointer"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleIngredientClick}
            type="button"
          >
            {updatedQuantity 
              ? unit 
                ? instance.name
                : updatedQuantity > 1 
                  ? pluralize(instance.name)
                  : instance.name 
              : capitalize(instance.name)}
          </button>

          {isPopupVisible && anchorRect && (
            <IngredientPopup
              anchorRect={anchorRect}
              ingredientName={instance.name}
              ingredientDescription={instance.description}
              maxWidthPx={640}
            />
          )}
        </span>

        {prep && <span>{`, ${prep} `}</span>}
      </div>
    </li>
  )
}

export default IngredientListItem