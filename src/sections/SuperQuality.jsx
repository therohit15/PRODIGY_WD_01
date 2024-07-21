import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You{" "}
          <span className="text-coral-red inline-block mt-3"> Every </span>{" "}
          <span className="text-coral-red inline-block mt-3"> Relatable </span>{" "}
          <span className="text-coral-red inline-block mt-3"> Characters </span>{" "}
          Products
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Crafted with precision and care, our meticulously designed action
          figures bring your favorite movie characters to life. Each figure is
          created to enhance your collection, offering unmatched quality,
          innovation, and a touch of realism.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction,
          providing you with a premium experience that elevates your connection
          to the characters you love.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
