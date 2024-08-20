'use client';
import { CartItem, Neumatico } from '@coba/api-interfaces';
import Image from 'next/image';
import defaultImage from './good-year.png';
import { addToCart } from '@coba/redux-store';
import { useDispatch } from 'react-redux';

type NeumaticoDetailProps = {
  neumatico: Neumatico;
};

export function NeumaticoDetail({ neumatico }: NeumaticoDetailProps) {
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   setTimeout(() => setFade(true), 1000);
  // }, []);

  const addProduct = () => {
    const ci: CartItem = {
      id: neumatico.id,
      name: `${neumatico.marca} ${neumatico.aro} ${neumatico.medida}`,
      quantity: 1,
      value: neumatico.valor,
    };
    dispatch(addToCart(ci) as any);
  };

  return (
    <div className="border-2 p-10 flex items-center justify-center flex-col  ">
      <div className="flex flex-row">
        <Image
          src={defaultImage}
          alt={neumatico.marca}
          width={150}
          className="mx-4"
        />
        <div className="mb-4 flex flex-col items-start justify-center max-w-96">
          <div className="mb-4 ">
            <h2 className="font-bold">Marca: {neumatico.marca}</h2>
            <div>
              <div>Aro: {neumatico.aro}</div>
              <div>Medida: {neumatico.medida}</div>
            </div>
          </div>

          <button onClick={addProduct} className="btn btn-primary">
            Seleccionar
          </button>
        </div>
      </div>
    </div>
  );
}
