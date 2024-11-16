import { useSelector } from "react-redux";
import Seat from "./Seat";

export default function HomePage() {
  const props = useSelector((state) => state.bookingTicketReducer);

  const renderListSeat = () => {
    const { listSeat } = props;
    if (listSeat && listSeat.length > 0) {
      return listSeat.map((item) => {
        if (item.hang === "") {
          return (
            <div key={"row-number"} className="seat-row">
              <div className="seat-label"></div>
              <div>
                {item.danhSachGhe.map((seat) => (
                  <span key={seat.soGhe} className="seat-number">
                    {seat.soGhe}
                  </span>
                ))}
              </div>
            </div>
          );
        }

        return (
          <div key={item.hang} className="seat-row">
            <div className="seat-label">{item.hang}</div>
            <div>
              {item.danhSachGhe.map((seat) => (
                <Seat key={seat.soGhe} seat={seat} />
              ))}
            </div>
          </div>
        );
      });
    }
  };

  const totalPrice = () =>
    props.listSeatSelected.reduce((total, seat) => total + seat.gia, 0);

  return (
    <div className="main-container">
      <div className="left-container">
        <h1 className="title">Đặt vé xem phim</h1>
        <div className="seating-area">{renderListSeat()}</div>
      </div>

      <div className="right-container">
        <h2 className="title">Danh sách ghế đã chọn</h2>
        <div className="legend">
          <div>
            <span className="seat seat__booked"></span> Ghế đã bán
          </div>
          <div>
            <span className="seat seat__selected"></span> Ghế đang chọn
          </div>
          <div>
            <span className="seat"></span> Ghế chưa bán
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Ghế</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {props.listSeatSelected.map((seat) => (
              <tr key={seat.soGhe}>
                <td>{seat.soGhe}</td>
                <td>{seat.gia.toLocaleString()} VNĐ</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="total-price">
                Tạm tính: {totalPrice().toLocaleString()} VNĐ
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
