import { useMemo, useState } from "react";
import { IconButton } from "../../../Components/IconButton";

interface TransactionFields {
  amount: number;
  party: string;
  isIncome: boolean;
  info?: string;
}

interface Transaction extends TransactionFields {
  id: number;
}

export const Budget = ({ height }: { height: number }) => {
  const [showCreate, setShowCreate] = useState(false);
  const [budgetTotal, setBudgetTotal] = useState({
    incomeTransactions: 0,
    totalIncome: 0,
    expenseTransactions: 0,
    totalExpense: 0,
  });
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const defaultFormInput = {
    amount: 0,
    party: "",
    info: "",
  };
  const [formInput, setFormInput] = useState(defaultFormInput);
  const [errors, setErrors] = useState({
    amount: false,
    party: false,
  });

  const maxHeightClass = height === 1 ? "max-h-24" : "max-h-48";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setErrors((prev) => ({ ...prev, [event.target.name]: false }));
  };

  const validate = (trasaction: TransactionFields) => {
    const { amount, party } = trasaction;

    if (amount <= 0) {
      setErrors((prev) => ({ ...prev, amount: true }));
      return false;
    } else if (party === "") {
      setErrors((prev) => ({ ...prev, party: true }));
      return false;
    }

    return true;
  };

  const addItem = (transaction: TransactionFields) => {
    const isValid = validate(transaction);

    if (!isValid) return;

    setTransactions((prev) => {
      const id = prev.length === 0 ? 1 : prev[prev.length - 1].id + 1;
      return [
        ...prev,
        {
          ...transaction,
          id,
          amount:
            typeof transaction.amount === "string"
              ? parseInt(transaction.amount)
              : transaction.amount,
        },
      ];
    });
    setFormInput(defaultFormInput);
    setShowCreate(false);
  };

  const deleteItem = (itemId: number) => {
    setTransactions((prev) => [...prev].filter(({ id }) => id !== itemId));
  };

  useMemo(() => {
    let incomeTransactions = 0,
      totalIncome = 0,
      expenseTransactions = 0,
      totalExpense = 0;

    transactions.forEach(({ amount, isIncome }) => {
      if (isIncome) {
        incomeTransactions++;
        totalIncome += parseInt("" + amount);
      } else {
        expenseTransactions++;
        totalExpense += parseInt("" + amount);
      }
    });

    setBudgetTotal({
      incomeTransactions,
      expenseTransactions,
      totalExpense,
      totalIncome,
    });
  }, [transactions]);

  return (
    <div className="overflow-auto h-full">
      <div className="sticky top-0 bg-slate-700 text-white rounded-t-lg p-2 flex flex-wrap gap-4 justify-around">
        <div className="flex gap-1 items-center w-max">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div>{`(${budgetTotal.incomeTransactions}) ${budgetTotal.totalIncome}`}</div>
        </div>
        <div className="flex gap-1 items-center w-max">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div>{`(${budgetTotal.expenseTransactions}) ${budgetTotal.totalExpense}`}</div>
        </div>
        <div className="flex gap-1 items-center w-max">
          <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
          <div>{`(${
            budgetTotal.expenseTransactions + budgetTotal.incomeTransactions
          }) ${budgetTotal.totalIncome - budgetTotal.totalExpense}`}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-2">
        {transactions.map((item) => (
          <div
            className={`border-2 p-2 rounded-lg flex flex-col gap-1 ${
              item.isIncome
                ? "bg-green-300 border-green-700"
                : "bg-red-300 border-red-700"
            }`}
          >
            <div className="flex">
              <div className="font-bold text-xl text-text-primary font-serif flex-1">
                {item.party}
              </div>
              <IconButton onClick={() => deleteItem(item.id)}>X</IconButton>
            </div>
            <div className="text-sm text-text-tertiary">{item.info}</div>
            <div className="bg-white/75 p-2 flex items-center justify-center rounded-lg">
              {item.amount}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full flex items-center flex-col">
        <button
          type="button"
          onClick={() => setShowCreate((prev) => !prev)}
          className="bg-white h-6 w-24 rounded-t-full flex justify-center z-10"
        >
          {showCreate ? "D" : "U"}
        </button>
        <div
          className={`overflow-hidden bg-white rounded-lg w-full transition-all duration-300 h-auto shadow-top ${
            showCreate ? maxHeightClass : "max-h-0"
          }`}
        >
          <div
            className={`p-2 overflow-y-auto ${maxHeightClass} flex flex-col gap-2`}
          >
            <input
              placeholder="Amount"
              type="number"
              className={`border rounded-lg px-2 w-full ${
                errors.amount
                  ? "border-red-800 bg-red-200"
                  : "border-slate-800 bg-gray-200"
              }`}
              name="amount"
              value={formInput.amount}
              onChange={handleChange}
            />
            <input
              placeholder="Party name"
              type="text"
              maxLength={20}
              className={`border rounded-lg px-2 w-full ${
                errors.party
                  ? "border-red-800 bg-red-200"
                  : "border-slate-800 bg-gray-200"
              }`}
              name="party"
              value={formInput.party}
              onChange={handleChange}
            />
            <input
              placeholder="Additional info"
              type="text"
              className="border border-slate-800 rounded-lg bg-gray-200 px-2 w-full"
              name="info"
              value={formInput.info}
              onChange={handleChange}
            />
            <div className="w-full flex gap-2">
              <button
                type="button"
                className="bg-green-300 p-2 flex-1 rounded-bl-lg"
                onClick={() => addItem({ ...formInput, isIncome: true })}
              >
                Income
              </button>
              <button
                type="button"
                className="bg-red-300 p-2 flex-1 rounded-br-lg"
                onClick={() => addItem({ ...formInput, isIncome: false })}
              >
                Expense
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
