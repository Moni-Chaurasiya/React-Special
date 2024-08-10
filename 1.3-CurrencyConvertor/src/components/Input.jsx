import { useId, useState } from "react";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  const [value, setValue] = useState(selectCurrency);

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    setValue(selectedCurrency); // Update the state with the selected currency
    if (onCurrencyChange) {
      onCurrencyChange(selectedCurrency); // Call the callback function with the selected currency
    }
  };
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          //  value={selectCurrency}
          value={value}
          //  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          //   onChange={setValue()}
          onChange={handleCurrencyChange}
          disabled={currencyDisable}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
