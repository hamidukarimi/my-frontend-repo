import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import RecentProductCard from "../Card/RecentProductCard";

const RecentProducts = () => {
  const products = [
    {
      id: 0,
      image: `./example.jpg`,
      title: "Lorem ispum",
      price: "$399",
      prevPrice: "$499",
      description:
        "Lorem ispum doler something lorem ispum doler something more is that",
    },
    {
      id: 0,
      image: `./example.jpg`,
      title: "Lorem ispum",
      price: "$399",
      prevPrice: "$499",
      description:
        "Lorem ispum doler something lorem ispum doler something more is that",
    },
    {
      id: 0,
      image: `./example.jpg`,
      title: "Lorem ispum",
      price: "$399",
      prevPrice: "$499",
      description:
        "Lorem ispum doler something lorem ispum doler something more is that",
    },
  ];

  return (
    <div className="px-4">
      {/* cards parent */}
      <div className="flex gap-4 my-8   overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {products.map((card) => (
          <RecentProductCard
            key={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
            prevPrice={card.prevPrice}
            description={card.description}
          />
        ))}
      </div>

      <hr />
    </div>
  );
};

export default RecentProducts;
