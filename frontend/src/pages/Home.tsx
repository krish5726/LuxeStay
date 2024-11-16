import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";
import './Home.css'

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2, 5) || [];
  const bestRowHotels = hotels?.slice(5, 7) || [];
  const bestButtomRowHotels = hotels?.slice(7) || [];

  return (
    <div className="space-y-8 p-6 bg-gray-50">
  <div className="text-center">
    <h2 className="text-4xl font-bold text-gray-800">Latest Destinations</h2>
    <p className="text-gray-600 text-lg">Most recent destinations added by our hosts</p>
  </div>
  <div className="space-y-8">
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      {topRowHotels.map((hotel) => (
        <LatestDestinationCard hotel={hotel}/>
      ))}
    </div>
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      {bottomRowHotels.map((hotel) => (
        <LatestDestinationCard hotel={hotel}/>
      ))}
    </div>
  </div>

  <div className="pt-10 text-center">
    <h2 className="text-4xl font-bold text-gray-800">Best Offers</h2>
    <p className="text-gray-600 text-lg">Get the best for less</p>
  </div>
  <div className="space-y-8">
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      {bestRowHotels.map((hotel) => (
        <LatestDestinationCard hotel={hotel}/>
      ))}
    </div>
    <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
      {bestButtomRowHotels.map((hotel) => (
        <LatestDestinationCard hotel={hotel}/>
      ))}
    </div>
  </div>
</div>

  );
};

export default Home;