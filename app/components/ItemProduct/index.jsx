import { useOutletContext } from "@remix-run/react";

const ItemProduct = ( { product } ) => {

    const { stateUpdaters } = useOutletContext();
    const { updateQuantity, deleteItemBuy }  = stateUpdaters;

    const { id, nombre, imagen, precio, cantidad } = product;

    const handleChange = (e) => {
        updateQuantity({ id, quantity: Number(e.target.value)});
    }

    const handleClick = () => {
        deleteItemBuy({ id });
    }

  return (
    <div className="producto">
        <div>
            <img src={imagen} alt={`Imagen del producto ${nombre}`} />
        </div>
        <div>
            <p className="nombre">{ nombre }</p>
            <p className="cantidad">Cantidad:</p>
            <select
            className="select" 
            onChange={handleChange}
            value={cantidad}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <p className="precio">$<span>{ precio }</span></p>
            <p className="nombre">Subtotal: $<span>{ cantidad * precio } </span></p>
        </div>
        <button
        className="btn-eliminar"
        type="button"
        onClick={handleClick}
        >
            X
        </button>
    </div>
  )
}

export { ItemProduct };