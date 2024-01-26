import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import img1 from "../assets/coin.svg";
import img2 from "../assets/Group 3.svg";
import img3 from "../assets/trending-up.svg";
const CardSection = () => {
  return (
    <div className="grid grid-cols-2 gap-2 ">
      <Card className="bg-white ">
        <CardHeader className="flex flex-row items-center justify-between">
          <img src={img1} alt="" className="w-8" />
          <img src={img2} alt="" className="w-20" />
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl text-order1 font-plus">Total Order</h1>
          <h2 className="text-2xl text-table1 font-plus">350</h2>
        </CardContent>
        <CardFooter className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2 bg-badge rounded-full px-4 py-1 text-green-500">
            <img src={img3} alt="" />
            <p className="font-plus">23,5%</p>
          </div>
          <p className="text-order2 font-inter">vs. previous month</p>
        </CardFooter>
      </Card>
      <Card className="bg-white ">
        <CardHeader className="flex flex-row items-center justify-between">
          <img src={img1} alt="" className="w-8" />
          <img src={img2} alt="" className="w-20" />
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl text-order1 font-plus">Total Order</h1>
          <h2 className="text-2xl text-table1 font-plus">350</h2>
        </CardContent>
        <CardFooter className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2 bg-badge rounded-full px-4 py-1 text-green-500">
            <img src={img3} alt="" />
            <p className="font-plus">23,5%</p>
          </div>
          <p className="text-order2 font-inter">vs. previous month</p>
        </CardFooter>
      </Card>
      <Card className="bg-white ">
        <CardHeader className="flex flex-row items-center justify-between">
          <img src={img1} alt="" className="w-8" />
          <img src={img2} alt="" className="w-20" />
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl text-order1 font-plus">Total Order</h1>
          <h2 className="text-2xl text-table1 font-plus">350</h2>
        </CardContent>
        <CardFooter className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2 bg-badge rounded-full px-4 py-1 text-green-500">
            <img src={img3} alt="" />
            <p className="font-plus">23,5%</p>
          </div>
          <p className="text-order2 font-inter">vs. previous month</p>
        </CardFooter>
      </Card>
      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <img src={img1} alt="" className="w-8" />
          <img src={img2} alt="" className="w-20" />
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl text-order1 font-plus">Total Order</h1>
          <h2 className="text-2xl text-table1 font-plus">350</h2>
        </CardContent>
        <CardFooter className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2 bg-badge rounded-full px-4 py-1 text-green-500">
            <img src={img3} alt="" />
            <p className="font-plus">23,5%</p>
          </div>
          <p className="text-order2 font-inter">vs. previous month</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardSection;
