import * as actionTypes from "./actionTypes";

const initialState = {
    article: [
        { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
        { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
    ],
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle = {
                id: Math.random(),
                title: action.type.title,
                body: action.type.body,
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle),
            }
    }
    return state
}

export default reducer