const ActionType = {
	SET_IMGS: 'SET_IMGS',
	SET_GROUPS: 'SET_GROUPS',
};

const initialState = {
	imgs: [],
	groups: false,
};

const ActionCreator = {
	setImgs: (imgs: []) => {
		return {
			type: ActionType.SET_IMGS,
			payload: imgs,
		};
	},
	setGroups: (groups: boolean) => {
		return {
			type: ActionType.SET_GROUPS,
			payload: groups,
		};
	},
};

const reducer = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case ActionType.SET_IMGS:
			return Object.assign({}, state, {
				imgs: action.payload,
			});
		case ActionType.SET_GROUPS:
			return Object.assign({}, state, {
				groups: action.payload,
			});
		default:
			return state;
	}
};

export { ActionType, ActionCreator, reducer };
