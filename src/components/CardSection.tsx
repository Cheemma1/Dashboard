import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import img1 from "../assets/coin.svg";
import img2 from "../assets/Group 3.svg";
import img3 from "../assets/trending-up.svg";
import img4 from "../assets/Group.svg";
import img5 from "../assets/Vector-2.svg";
import img6 from "../assets/box-tick.svg";
import img7 from "../assets/shopping-cart.svg";
import img8 from "../assets/3d-rotate.svg";
const CardSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
      <Card className="w-full bg-primary text-primary-foreground">
        <CardHeader className="flex flex-row items-center justify-between">
          <img src={img6} alt="" className="w-8" />
          <img src={img5} alt="" className="w-20" />
        </CardHeader>
        <CardContent>
          <h1 className="text-1xl text-order1 font-plus pb-1">Total Order</h1>
          <h2 className="text-1xl text-table1 font-plus">350</h2>
        </CardContent>
        <CardFooter className="flex  justify-between ">
          <div className="flex items-center gap-2 bg-badge rounded-full px-4 py-1 text-green-500">
            <img src={img3} alt="" />
            <p className="font-plus">23.5%</p>
          </div>
          <p className="text-order2 font-inter text-sm">vs. previous month</p>
        </CardFooter>
      </Card>
      <Card className="bg-primary text-primary-foreground ">
        <CardHeader className="flex flex-row items-center justify-between">
          <img src={img8} alt="" className="w-8" />
          <img src={img2} alt="" className="w-20" />
        </CardHeader>
        <CardContent>
          <h1 className="text-1xl text-order1 font-plus pb-1">Total Refund</h1>
          <h2 className="text-1xl text-table1 font-plus">270</h2>
        </CardContent>
        <CardFooter className="flex  justify-between">
          <div className="flex items-center gap-2 bg-badge rounded-full px-4 py-1 text-red-500">
            <img src={img4} alt="" />
            <p className="font-plus">23.5%</p>
          </div>
          <p className="text-order2 font-inter text-sm">vs. previous month</p>
        </CardFooter>
      </Card>
      <Card className="bg-primary  text-primary-foreground">
        <CardHeader className="flex flex-row items-center justify-between">
          <img src={img7} alt="" className="w-8" />
          <img src={img2} alt="" className="w-20" />
        </CardHeader>
        <CardContent>
          <h1 className="text-1xl text-order1 font-plus pb-1">Average sales</h1>
          <h2 className="text-1xl text-table1 font-plus">1675</h2>
        </CardContent>
        <CardFooter className="flex  justify-between ">
          <div className="flex items-center gap-2 bg-badge rounded-full px-4 py-1 text-red-500">
            <img src={img4} alt="" />
            <p className="font-plus">23.5%</p>
          </div>
          <p className="text-order2 font-inter text-sm">vs. previous month</p>
        </CardFooter>
      </Card>
      <Card className="bg-primary text-primary-foreground">
        <CardHeader className="flex flex-row items-center justify-between">
          <img src={img1} alt="" className="w-8" />
          <img src={img5} alt="" className="w-20" />
        </CardHeader>
        <CardContent>
          <h1 className="text-1xl text-order1 font-plus pb-1">Total Order</h1>
          <h2 className="text-1xl text-table1 font-plus ">$350,000</h2>
        </CardContent>
        <CardFooter className="flex  justify-between ">
          <div className="flex items-center gap-2 bg-badge rounded-full px-4 py-1 text-green-500">
            <img src={img3} alt="" />
            <p className="font-plus">23.5%</p>
          </div>
          <p className="text-order2 font-inte text-sm">vs. previous month</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardSection;
