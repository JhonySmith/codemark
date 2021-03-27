import React, { useState } from 'react';
import { getImage } from '../../API/api';
import { ActionCreator } from '../../store/reducer';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from './load-button-styles';

interface LoadButtonProps {
	tag: string;
	setError(text: string): void;
}

const randomTags: string[] = ['cat', 'dog', 'money', 'sdsdsd', 'delay'];

const LoadButton: React.FC<LoadButtonProps> = (props) => {
	const { tag, setError } = props;

	const list: [] = useSelector((state: { imgs: [] }) => state.imgs);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	function setImgs(img: string | string[], tag: string) {
		if (img) {
			let copy: any = list.slice();
			let newImg: {} = { img, tag };
			copy.push(newImg);
			setLoading(false);

			dispatch(ActionCreator.setImgs(copy));
		} else {
			setError('Тег не найден');
			setLoading(false);
		}
	}

	function getMultipleImgs(tagsInput: string) {
		let tags = tagsInput.split(',');
		let imgs: string[] = [];

		let LoadImgs = new Promise((resolve, reject) => {
			function pushImage(link: string) {
				imgs.push(link);
				if (imgs.length === tags.length) {
					resolve('ready');
				}
			}

			tags.forEach((tag, index) => {
				getImage(tag, pushImage, serverError);
			});
		});

		LoadImgs.then(() => {
			setImgs(imgs, tagsInput);
		});
	}

	function serverError(error: string) {
		setError(error);
		setLoading(false);
	}

	return (
		<Button
			onClick={() => {
				if (tag) {
					setLoading(true);
					if (tag === 'delay') {
						setTimeout(() => {
							getImage(
								randomTags[Math.floor(Math.random() * randomTags.length)],
								setImgs,
								serverError
							);
						}, 5000);
					} else if (tag.split(',').length <= 1) {
						getImage(tag, setImgs, serverError);
					} else {
						getMultipleImgs(tag);
					}
				} else {
					setError('Введите ТЕГ');
				}
			}}
			disabled={loading}
			loading={loading ? 'loading' : ''}
		>
			{loading ? 'Загрузка...' : 'Загрузить'}
		</Button>
	);
};

export default LoadButton;
