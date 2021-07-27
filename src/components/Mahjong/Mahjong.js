import React, {useReducer, useState} from "react";
import {Row} from "antd";

import Card from "../MahjongCard/MahjongCard";
import cls from './Mahjong.module.css';
import antd from "antd/dist/antd.css";
import {useDispatch, useSelector} from "react-redux";
import {changeCards} from "../../store/mahjong/mahjong-actions";
import generateNumbers from "../../scripts";


const Mahjong = () => {
    // let numbers = useSelector(state => state.mahjong.numbers);
    // const dispatch = useDispatch();
    // const [dispatch] = useReducer(mahjongReducer, numbers);
    const [numbers, setNumbers] = useState(generateNumbers(1,50));
    const [card, setCard] = useState({value: 0, id: 0});

    const onCardClick = (value, id) => {
        setTimeout(() => {
            let newItem = {...numbers[id], visible: true, disabled: false};
            let prevItem = {...numbers[card.id], visible: true, disabled: false};

            const updatedArray = [
                ...numbers.slice(0, id),
                newItem,
                ...numbers.slice(id + 1)
            ];

            setNumbers(updatedArray);

            if (card.value === 0 && !value.disabled && !value.visible) {
                setCard({
                    value: value.value,
                    id: id
                });
            } else if (
                !value.disabled &&
                !value.disabled &&
                value.value !== card.value &&
                value.id !== id
            ) {
                newItem = {...newItem, visible: false};
                setTimeout(() => {
                    prevItem = {...prevItem, visible: false};
                    setCard({
                        value: 0,
                        id: 0
                    });
                    let updatedArray = [
                        ...numbers.slice(0, card.id),
                        prevItem,
                        ...numbers.slice(card.id + 1)
                    ];

                    setNumbers(updatedArray);
                }, 100);
            } else if (
                value.value === card.value &&
                !value.disabled &&
                !value.visible &&
                value.id !== id
            ) {
                setCard({
                    value: 0,
                    id: 0
                });
                newItem = {...newItem, disabled: true, visible: true};
                prevItem = {...prevItem, disabled: true, visible: true};
                let newArr = [
                    ...numbers.slice(0, card.id),
                    prevItem,
                    ...numbers.slice(card.id + 1)
                ];

                const updatedArray = [
                    ...newArr.slice(0, id),
                    newItem,
                    ...newArr.slice(id + 1)
                ];

                setNumbers(updatedArray);
            }
        }, 400);
        return onCardClick;
    };

    return (
        <div>
            <Row type="flex" justify="center" align="middle">
        <span className={cls.wrapper}>
          {numbers.map((item, id) => {
              return (
                  <Card
                      visible={item.visible}
                      number={item.value}
                      onClick={() => onCardClick(item, id)}
                      key={id}
                      disabled={item.disabled}
                  />
              );
          })}
        </span>
            </Row>
        </div>
    );
};

export default Mahjong;
