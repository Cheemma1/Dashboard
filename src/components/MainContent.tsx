import CardSection from "./CardSection";
import ChartSection from "./ChartSection";
import Progress from "./Progress";
import TableSection from "./TableSection";

const MainContent = () => {
  return (
    <div className="container  pt-4  mt-20 max-h-full overflow-y-scroll md:ml-10 md:pr-12">
      <div className="grid  grid-cols-1 xl:grid-cols-2 gap-4">
        <ChartSection />
        <CardSection />

        <TableSection />

        <Progress />
      </div>
    </div>
  );
};

export default MainContent;
