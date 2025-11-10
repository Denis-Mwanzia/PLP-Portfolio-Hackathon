import React from 'react';

const SectionDivider = ({ flip = false }) => {
	return (
		<div aria-hidden="true" style={{ lineHeight: 0 }}>
			<svg
				viewBox="0 0 1440 120"
				preserveAspectRatio="none"
				style={{
					display: 'block',
					width: '100%',
					height: '80px',
					transform: flip ? 'scaleY(-1)' : 'none'
				}}
			>
				<path
					fill="currentColor"
					fillOpacity="0.06"
					d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,69.3C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
				></path>
			</svg>
		</div>
	);
};

export default SectionDivider;

