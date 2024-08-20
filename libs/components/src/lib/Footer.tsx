import { SelectorTema } from './SelectorTema';

export function Footer() {
  return (
    <div className="mt-8 p-8 bg-primary-content text-primary flex justify-between  ">
      <div>
        <div>Camino internacional 3800, Pucón</div>
        <div>+56 9 1234 5678</div>
      </div>
      <div>
        <div>info@zonacoba.cl</div>
        <SelectorTema />
      </div>
    </div>
  );
}
