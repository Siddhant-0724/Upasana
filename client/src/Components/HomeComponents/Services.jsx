import { Card, CardContent } from "@/components/ui/card";
import { FaPrayingHands, FaImage, FaMusic, FaOm, FaUser, FaShoppingCart, FaPlane, FaBus } from "react-icons/fa";

const services = [
  { name: "Live Darshan", icon: FaPrayingHands, link: "#live-darshan" },
  { name: "Images", icon: FaImage, link: "#images" },
  { name: "Songs", icon: FaMusic, link: "#songs" },
  { name: "Puja", icon: FaOm, link: "#puja" },
  { name: "Panditji", icon: FaUser, link: "#panditji" },
  { name: "Online Store", icon: FaShoppingCart, link: "#online-store" },
  { name: "Traveling", icon: FaPlane, link: "#traveling" },
  { name: "Tour Packages", icon: FaBus, link: "#tour-packages" },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 py-9 md:grid-cols-2 lg:grid-cols-4 bg-[#fdece6] gap-6 p-4">
      {services.map((service) => (
        <Card key={service.name} className="cursor-pointer p-6 w-2/3 ml-16 rounded-2xl shadow-md hover:shadow-lg bg-white hover:bg-gray-100 transition duration-300">
          <CardContent className="flex flex-col items-center gap-4">
            <service.icon className="text-4xl text-orange-500" />
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <a href={service.link} className="text-blue-500 hover:underline">
              Explore
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Services;