import React from 'react';
import { Button } from './clear-button-styles';
import { useDispatch } from 'react-redux';
import { ActionCreator } from '../../store/reducer';

interface ClearButtonProps {
	clearInput(): void;
}

const ClearButton: React.FC<ClearButtonProps> = (props) => {
	const { clearInput } = props;
	const dispatch = useDispatch();

	return (
		<Button
			onClick={() => {
				dispatch(ActionCreator.setImgs([]));
				clearInput();
			}}
		>
			{' '}
			Очистить
		</Button>
	);
};

export default ClearButton;
