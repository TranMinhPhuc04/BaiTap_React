import "./seat.scss";
import { useState } from "react";
import { setBookingSeat } from "./duck/reducer";
import { useDispatch } from "react-redux";

export default function Seat(props) {
  const { seat } = props;
  const [isSelect, setIsSelect] = useState(false);
  const dispatch = useDispatch();

  const handSelectSeat = () => {
    if (!seat.daDat) {
      setIsSelect(!isSelect);
      dispatch(setBookingSeat(seat));
    }
  };

  return (
    <button
      onClick={handSelectSeat}
      className={`seat 
        ${seat.daDat ? "seat__booked" : ""} 
        ${isSelect ? "seat__selected" : ""}
      `}
      disabled={seat.daDat}
    >
      {seat.soGhe}
    </button>
  );
}
