import React from 'react'
import { uniqueTags } from '../../assets/lists/tags.js'

function TagSelect({ activeTag, setActiveTag }) {
	return (
		<div className="mx-auto pt-10 max-w-175">
			<h3 className="text-center text-sm sm:text-base font-medium text-[#2F3E46]">
				Browse by tag
			</h3>

			<div className="mt-3 flex flex-wrap justify-center gap-2">
				{uniqueTags.map((tag) => {
					const isActive = tag === activeTag

					return (
						<button
							key={tag}
							type="button"
							onClick={() =>
								setActiveTag((prev) => (prev === tag ? null : tag))
							}
							className={`tag-pill ${
								isActive
									? 'bg-accent text-white hover:bg-accent/50'
									: 'bg-accent/20 hover:bg-[#F1EFEA]'
							}`}>
							#{tag}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default TagSelect
