import React from 'react'
import { fractify, capitalize, pluralize } from '../../assets/utils/helpers.js'
import IngredientPopup from '../IngredientPopup'

function IngredientListItem({ ingredient, recipeMultiplier, activePopupId, setActivePopupId }) {
	const [isChecked, setIsChecked] = React.useState(false)

  const popupRef = React.useRef(null)
  const triggerRef = React.useRef(null)

  const isPopupVisible = activePopupId === ingredient.ref
	const { instance, note, prep, quantity, ref, unit } = ingredient
	const updatedQuantity = quantity * recipeMultiplier
	const { whole, fraction } = fractify(updatedQuantity)

	const handleCheckboxChange = () => {
		setIsChecked(prev => !prev)
	}

	const handleIngredientClick = (e) => {
  e.stopPropagation()

  setActivePopupId(prev =>
    prev === ingredient.ref ? null : ingredient.ref
  )
}

	return (
		<li className="flex items-center my-1.5">
			<input
				type="checkbox"
				className="checkbox border-black border-2 mr-2"
				checked={isChecked}
				onChange={handleCheckboxChange}
			/>
			<div className={`${isChecked && 'italic text-gray-500'}`}>
				{/* Quantity, if present, fractified */}
				{quantity && (
					<span>
						{whole !== 0 && `${whole} `}
						{fraction !== 0 && `${fraction} `}
					</span>
				)}
				{/* Unit of measurement, if present, pluralized if current quantity is more than 1 */}
				{unit && (
					<span>{`${updatedQuantity > 1 ? pluralize(unit) : unit} `}</span>
				)}
				{/* Note, if present */}
				{note && <span>{`${note} `}</span>}
				{/* Ingredient name, capitalized if no quantity present (makes it first word) */}
        <span className="relative inline-block">
          <button
            ref={triggerRef}
            className="underline decoration-dotted underline-offset-3 hover:cursor-pointer"
            onMouseDown={(e) => e.stopPropagation()} // extra safety
            onClick={handleIngredientClick}
            type="button"
          >
            {quantity ? instance.name : capitalize(instance.name)}
          </button>

          {isPopupVisible && (
            <div ref={popupRef} onMouseDown={(e) => e.stopPropagation()} className='absolute z-50 border-2 bottom-5 left-6 w-[50vw] border-black bg-red-500'>
              <IngredientPopup
                name={instance.name}
                description={instance.description}
              />
            </div>
          )}
        </span>
				{/* Prep method, if present, with leading comma */}
				{prep && <span>{`, ${prep} `}</span>}
			</div>
		</li>
	)
}

export default IngredientListItem
