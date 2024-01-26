import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
const Progress = () => {
  return (
    <div className="bg-white">
      <Card>
        <div className="flex items-center justify-between">
          <p>Top Platform</p>
          <p>See All</p>
        </div>
        <CardHeader className="">Book Bazzar</CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex items-center justify-between gap-8">
          <p>$25,00000</p>
          <p>+15%</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Progress;
