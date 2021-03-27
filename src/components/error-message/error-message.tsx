import React, { useEffect } from 'react';

import { ErrorBlock } from './error-message-styles';

interface ErrorMessageProps {
	errorText: string;
	error(text: string): void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
	const { errorText, error } = props;

	function closeError() {
		error('');
	}

	useEffect(() => {
		document.addEventListener('click', closeError);
		return () => {
			document.removeEventListener('click', closeError);
		};
	});

	return <ErrorBlock>{errorText}</ErrorBlock>;
};

export default ErrorMessage;
