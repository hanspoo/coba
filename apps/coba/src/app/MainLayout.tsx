'use client';
import { Footer, Header, StoreProvider } from '@coba/components';
import Image from 'next/image';

const phone = process.env.PHONE || '56978839454';
// const phone = '56993199305';

export function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto max-w-screen-xl h-screen flex flex-col justify-between relative">
      <div>
        <Header />
        <div>{children}</div>
        <a
          href={`https://wa.me/${phone}?text=Consulta%20sobre%20neumáticos%20o%20servicios`}
        >
          <Image
            width={378 / 1.5}
            height={80 / 1.5}
            className="bottom-6 right-4 fixed"
            alt="wtsp"
            src="/images/wtsp.png"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

type JumbotronProps = {
  title: string;
  content: string;
  className: string;
};
function Jumbotron({ title, content, className }: JumbotronProps) {
  return (
    <div
      className={`${className} my-4 p-10 text-6xl  rounded-lg shadow-lg mx-2 lg:mx-0 hover:text-white`}
    >
      {title}
      <div className="my-4 text-2xl">{content}</div>
    </div>
  );
}
