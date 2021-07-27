export const mahjongActions = {
    INITIALIZE_CARDS: 'INITIALIZE_CARDS',
    CHANGE_CARDS: 'CHANGE_CARDS',
    SET_PREVIOUSLY_CLICKED_CARD: 'SET_PREVIOUSLY_CLICKED_CARD',
    EMPTY_PREVIOUSLY_CLICKED_CARD_IDS: 'EMPTY_PREVIOUSLY_CLICKED_CARD_IDS'
};

export const initializeCards = (cards) => ({type: mahjongActions.INITIALIZE_CARDS, cards});
export const changeCards = (changeArray) => ({type: mahjongActions.CHANGE_CARDS, changeArray});
export const setPreviouslyClickedCardId = (cardId) => ({type: mahjongActions.SET_PREVIOUSLY_CLICKED_CARD, cardId});
export const emptyPreviouslyClickedCardIds = () => ({type: mahjongActions.EMPTY_PREVIOUSLY_CLICKED_CARD_IDS});
