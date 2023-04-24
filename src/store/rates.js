const initialState = {
  amount: "18.70",
  currencyCode: "USD"
}

export const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "rates/amountChanged":
      return { ...state, amount: action.payload };
    case "rates/currencyCodeChanged":
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
}

// selectors
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;