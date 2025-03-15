import prasad from '../../assets/Prasad Image.png';
import yatra from '../../assets/templeImage.png';

const ServiceCards = () => {
  const services = [
    {
      title: "Get Your Prasad.",
      description:
        "Now you can enjoy the divine blessings of temple prasad right at home with our easy delivery service.",
      buttonText: "Order Now",
      image: prasad,
      link: "/prasad", // Example link
    },
    {
      title: "Plan Your Tirth Yatra",
      description:
        "Join us for an unforgettable tirth yatra at affordable prices, where your spiritual journey is made hassle-free.",
      buttonText: "Book Now",
      image: yatra,
      link: "/yatra", // Example link
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-18 mb-8 p-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md text-center max-w-xs"
        >
          <h3 className="text-lg font-semibold mb-4">{service.title}</h3>
          <img
            src={service.image}
            alt={service.title}
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <p className="text-gray-600 mb-6">{service.description}</p>
          <a href={service.link} className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 shadow-lg">
            {service.buttonText}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
