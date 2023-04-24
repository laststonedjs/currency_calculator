// redux
import { useDispatch } from "react-redux";

export const AmountField = ({ amount }) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch({ type: "amountChanged", payload: e.target.value });
  }

  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
      />
    </form>
  );
}
