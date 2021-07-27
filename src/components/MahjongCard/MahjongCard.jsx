import React from "react";
import * as cls from "./MahjongCardStyle";

const MahjongCard = props => {
  return (
    <>
      {props.visible ? (
        <cls.Card>
          <cls.Number {...props}>{props.number}</cls.Number>
        </cls.Card>
      ) : (
        <cls.Card onClick={props.onClick}>
          <cls.Number {...props}>{props.number}</cls.Number>
        </cls.Card>
      )}
    </>
  );
};

export default MahjongCard;
