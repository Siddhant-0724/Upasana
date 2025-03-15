import { Card, CardContent } from "@/components/ui/card";
import {
  FaPrayingHands,
  FaImage,
  FaMusic,
  FaOm,
  FaUser,
  FaShoppingCart,
  FaPlane,
  FaBus,
} from "react-icons/fa";

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

const ServiceGrid = () => {
  return (
    <div className="bg-[#fdece6]">
      <h3 className="text-center text-3xl font-semibold pt-6">Our Services</h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 items-center justify-center gap-4 p-8  text-center">
        {services.map((service, index) => (
          <a
            href={service.link}
            key={index}
            className="flex flex-col items-center justify-center w-full"
          >
            <Card className="w-full max-w-[230px] rounded-2xl shadow-md hover:shadow-lg transition-all border-none bg-white p-2">
              <CardContent className="flex items-center justify-center">
                <service.icon className="text-6xl font-light text-gray-700 p-2" />
              </CardContent>
            </Card>
            <h3 className="text-xs font-semibold text-gray-700 mb-3 mt-1">
              {service.name}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
