import CardSection from "./CardSection";
import ChartSection from "./ChartSection";
import Progress from "./Progress";
import TableSection from "./TableSection";

const MainContent = () => {
  return (
    <div className="container  mt-20 max-h-full overflow-y-scroll lg:ml-10  grid  grid-cols-1 md:grid-cols-2 gap-4">
      <ChartSection />
      <CardSection />

      <TableSection />

      <Progress />
    </div>
  );
};

export default MainContent;
