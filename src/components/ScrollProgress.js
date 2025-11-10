import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 4px;
	width: ${(p) => p.$width}%;
	background: linear-gradient(90deg, var(--secondary-blue), var(--primary-blue));
	box-shadow: 0 0 12px rgba(58, 123, 213, 0.6);
	z-index: 1200;
	transition: width 0.08s ease;
`;

const ScrollProgress = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const docHeight =
				document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			setProgress(Math.min(100, Math.max(0, pct)));
		};
		onScroll();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return <Bar $width={progress} aria-hidden="true" />;
};

export default ScrollProgress;

