const createAction = <T>(type) => {
    return (payload: T) => {
        return {type, payload};
    };
};

export const createActionFactory = namespace => {
    return <T>(type) => {
        const actionType = `${namespace}/${type}`;
        return createAction<T>(actionType);
    };
};
