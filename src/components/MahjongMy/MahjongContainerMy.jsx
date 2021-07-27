import {useState} from "react";
import {useSelector} from "react-redux";

const MahjongContainerMy = () => {
    const cards = useSelector(state => state.mahjong.cards);
    console.log(cards);
    // const [cardsa, setCards] = useState();
    // export const mapStateToProps = (state: any) => ({
    //     cards: state.MahjongReducer.cards,
    //     previouslyClickedCardIds: state.MahjongReducer.previouslyClickedCardIds
    // });
    return (
        <div>

        </div>
    );
}

export default MahjongContainerMy;