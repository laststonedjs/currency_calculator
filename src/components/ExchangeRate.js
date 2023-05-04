import { useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  getAmount,
  getCurrencyCode,
  getCurrencyData,
  supportedCurrencies
} from "../store/rates";
// components
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";

export const ExchangeRate = () => {
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);

  // fetch the exchange rates the first time
  // useEffect(() => {
  //   dispatch(changeCurrencyCode(currencyCode));
  // }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
