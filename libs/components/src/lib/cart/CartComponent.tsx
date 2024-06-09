'use client';
import { useCallback, useRef } from 'react';
import { Cart } from '@coba/api-interfaces';
import { removeItem } from '@coba/redux-store';
import { useDispatch } from 'react-redux';

import { Button, Modal } from 'react-daisyui';
import { CartItemList } from './CartItemList';

type CartComponentProps = {
  cerrar: () => void;
  cart: Cart;
};

export function CartComponent({ cerrar, cart }: CartComponentProps) {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  const vaciar = () => {
    dispatch(removeItem('') as any);
  };

  const [cantidadTotal, valorTotal] = cart!.items.reduce(
    (acc, item) => {
      acc[0] = acc[0] + item.quantity;
      acc[1] = acc[1] + item.value * item.quantity;
      return acc;
    },
    [0, 0]
  );

  return (
    <div className="bg-sky-100 cursor-default text-black border-2 shadow-lg z-[1000] p-4 min-h-80 min-w-96 absolute top-8 -right-10 rounded-sm">
      <Modal ref={ref} className="bg-secondary p-4">
        <Modal.Header className="font-bold mb-2">Vaciar Canasta</Modal.Header>
        <Modal.Body className="mb-5">
          Se borrarán todos los productos seleccionados
        </Modal.Body>
        <Modal.Actions>
          <form method="dialog">
            <Button className="mr-1">No</Button>
            <Button onClick={vaciar}>Si</Button>
          </form>
        </Modal.Actions>
      </Modal>
      <h2 className="text-2xl mb-2">Shopping Cart</h2>
      {cart!.items.length === 0 && <p>No hay productos</p>}
      {cart?.items.length > 0 && (
        <table className="mb-20">
          <thead></thead>
          <tr>
            <th className="w-[60%] p-1">Producto</th>
            <th className="w-[10%] p-1">Cant</th>
            <th className="w-[20%] p-1">Valor</th>
            <th className="w-[10%] p-1">Opc</th>
          </tr>
          <tbody>
            {cart.items.map((item, i) => (
              <CartItemList item={item} key={i} i={i} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="p-1">Total</td>
              <td className="p-1 text-right">
                {numberFormatter.format(cantidadTotal)}
              </td>
              <td className="p-1 text-right">
                {currencyFormatter.format(valorTotal)}
              </td>
              <td className="p-1"></td>
            </tr>
          </tfoot>
        </table>
      )}
      <div className="mt-6 absolute bottom-4">
        {cart!.items.length > 0 && (
          <button className="btn mr-1" onClick={handleShow}>
            Vaciar
          </button>
        )}
        <button className="btn" onClick={cerrar}>
          Cerrar
        </button>
        <button className="ml-6 btn btn-secondary" onClick={cerrar}>
          Solicitar Presupuesto
        </button>
      </div>
    </div>
  );
}
export const currencyFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
});

export const numberFormatter = new Intl.NumberFormat('es-CL');
