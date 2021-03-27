import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import ErrorMessage from '../error-message/error-message';
import LoadButton from '../load-button/load-button';
import ClearButton from '../clear-button/clear-button';
import GroupedButton from '../group-button/group-button';
import { Panel, TegInput } from './styles/action-panel-styles';
import {
	List,
	Item,
	ItemImg,
	Groups,
	GroupTitle,
	Group,
} from './styles/images-list';

const ActionPanel: React.FC = () => {
	const inputRef: any = useRef(null);
	const [tag, setTag] = useState('');
	const [grouped, setGrouped] = useState(false);

	const [error, setError] = useState('');

	const list: [] = useSelector((state: { imgs: [] }) => state.imgs);

	function unique(arr: any[]) {
		return Array.from(new Set(arr));
	}

	const groups: string[] = [];
	list.forEach((img: { tag: string }) => groups.push(img.tag));
	const uniqueGroups = unique(groups);

	function clearInput() {
		inputRef.current.value = '';
	}

	return (
		<React.Fragment>
			<Panel>
				{error && <ErrorMessage errorText={error} error={setError} />}
				<TegInput
					ref={inputRef}
					type='text'
					placeholder='Введите ТЕГ'
					onKeyPress={(evt) => {
						const regExp = new RegExp('[A-Za-z,]');
						if (!regExp.test(evt.key)) {
							evt.preventDefault();
						}
					}}
					onChange={() => setTag(inputRef.current.value.toLowerCase())}
					pattern={'[A-Za-z]'}
				/>
				<LoadButton tag={tag} setError={setError} />
				<ClearButton clearInput={clearInput} />
				<GroupedButton grouped={grouped} setGrouped={setGrouped} />
			</Panel>
			{!grouped ? (
				<List>
					{list.map((img: { img: any; tag: string }, index: number) => (
						<Item
							key={index}
							onClick={() => {
								setTag(img.tag);
								inputRef.current.value = img.tag;
							}}
						>
							{typeof img.img === 'string' ? (
								<ItemImg src={img.img} />
							) : (
								img.img.map((imgsrc: string) => {
									return <ItemImg src={imgsrc} />;
								})
							)}
						</Item>
					))}
				</List>
			) : (
				<Groups>
					{uniqueGroups.map((group, index) => {
						return (
							<React.Fragment>
								<GroupTitle>{group}</GroupTitle>
								<Group key={index + Date.now()}>
									{list
										.slice()
										.filter((img: { tag: string }) => img.tag === group)
										.map((img: { tag: string; img: any }, index) => {
											return (
												<Item
													key={index}
													onClick={() => {
														setTag(img.tag);
														inputRef.current.value = img.tag;
													}}
												>
													{typeof img.img === 'string' ? (
														<ItemImg src={img.img} />
													) : (
														img.img.map((imgsrc: string) => {
															return <ItemImg src={imgsrc} />;
														})
													)}
												</Item>
											);
										})}
								</Group>
							</React.Fragment>
						);
					})}
				</Groups>
			)}
		</React.Fragment>
	);
};

export default ActionPanel;
