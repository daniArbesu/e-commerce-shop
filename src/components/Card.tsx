import Link from 'next/link';
import { type CardItem } from '../../types';

interface Props {
  item: CardItem;
}

const Card: React.FC<Props> = ({ item }) => {
  return (
    <Link href={`/products/${item.id}`}>
      <article className="w-72 flex flex-col gap-3">
        <div
          style={{
            ['--image-url' as string]: `url(${item.img})`,
            ['--hover-url' as string]: `url(${item.img2})`
          }}
          className="w-full h-96 overflow-hidden relative bg-[image:var(--image-url)] hover:bg-[image:var(--hover-url)] bg-cover "
        >
          {item.isNew && (
            <span className="absolute top-1 left-1 bg-white text-teal-500 p-1 text-sm font-medium">
              New Season
            </span>
          )}
        </div>
        <h3 className="text-base font-normal">{item.title}</h3>
        <div className="flex gap-5">
          <span className="text-lg font-medium text-gray-500 line-through">${item.oldPrice}</span>
          <span className="text-lg font-medium">${item.price}</span>
        </div>
      </article>
    </Link>
  );
};

export default Card;
