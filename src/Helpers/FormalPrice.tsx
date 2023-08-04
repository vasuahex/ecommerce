
interface FormalPriceProps {
    price: number; 
}

const FormalPrice: React.FC<FormalPriceProps> = ({ price }) => {
    const formattedPrice = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR"
    }).format(price/100);

    return <span>{formattedPrice}</span>;
}

export default FormalPrice;
