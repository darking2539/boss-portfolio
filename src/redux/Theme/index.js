import { SetThemes } from './const';

function setThemes(state, storeThemesDetail) {
    return {
      ...state,
      storeThemesDetail,
    };
  }

var init = {
    storeThemesDetail: "dark",
};

export default (state = init, action) => {
    switch (action.type) {
        case SetThemes:
            return setThemes(state, action.storeThemesDetail);
        default:
            return state
    }
}