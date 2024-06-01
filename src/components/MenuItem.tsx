interface Props{
    itemName: string;
    quantity: number;
    price: number;
}

const MenuItem:React.FC<Props> = ({itemName, quantity, price})=>{
    return(
        <div className="menu-item">{quantity}) {itemName} | {price}KGS </div>
    )
}

export default MenuItem