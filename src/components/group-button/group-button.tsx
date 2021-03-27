import React from 'react';
import { Button } from './group-button-styles';

interface GroupButtonProps {
	setGrouped(isGrouped: boolean): void;
	grouped: boolean;
}

const GroupButton: React.FC<GroupButtonProps> = (props) => {
	const { setGrouped, grouped } = props;

	return (
		<Button
			onClick={() => {
				setGrouped(!grouped);
			}}
		>
			{grouped ? 'Разгруппировать' : 'Группировать'}
		</Button>
	);
};

export default GroupButton;
