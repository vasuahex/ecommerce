import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
interface CartAmountToggleProps {
  amount: number;
  setIncrease: () => void;
  setDecrease: () => void;
}
const CartAmountToggle: React.FC<CartAmountToggleProps> = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default CartAmountToggle