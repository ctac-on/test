import React from 'react'

import './blockStyle.sass'

const BacksComponent = ({ data }) => {
	return (
		
			
			<div className="backsHead__item">
				<div className="backsHead__item__text">
					<span>{data.cardName}</span>&nbsp; шт.
				</div>
				<div className="backsHead__item__content">
					<span className="backsHead__item__content__big sides-left thirty">{data.main.number}</span>
					<span className="backsHead__item__content__mini middle">&mdash;</span>
					<span className="backsHead__item__content__mini sides">
						{data.main.persent + '%'}
					</span>
				</div>
			
				{data.type===0?
				<div className="backsHead__item__content">
					<span className="backsHead__item__content__big sides-left">{data.firstFactory.number}</span>
					<span className="backsHead__item__content__mini middle">&mdash;</span>
					<span className="backsHead__item__content__mini sides"
						
					>
						{data.firstFactory.persent + '%'}
					</span>
				</div>: <></>}
			
				{data.type===0?
				<div className="backsHead__item__content">
					<span className="backsHead__item__content__big sides-left">{data.secondFactory.number}</span>
					<span className="backsHead__item__content__mini middle" >&mdash;</span>
					<span className="backsHead__item__content__mini sides"
						
					>
						{data.secondFactory.persent + '%'}
					</span>
				</div>
				:<></>}
			</div>
		
	)
}
export default BacksComponent
