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
      image: `https://i.pinimg.com/736x/34/84/0a/34840a5cb9734c02dc1aa919c99afe31.jpg`,
      title: "Lorem ispum",
      price: "$399",
      prevPrice: "$499",
      description:
        "Lorem ispum doler something lorem ispum doler something more is that",
    },
    {
      id: 0,
      image: `https://i.pinimg.com/736x/a3/a8/4b/a3a84bce19bfa30cc2dea8504ddb7bfe.jpg`,
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
