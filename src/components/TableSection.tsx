import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import doc from "../assets/document-download.svg";

const TableSection = () => {
  return (
    <div className="my-4 bg-white font-plus">
      <div className="flex items-center justify-between px-4 py-4 font-bold">
        <p>Last orders</p>
        <p className="text-green-500">See All</p>
      </div>
      <Table className="mt-6">
        <TableHeader>
          <TableRow className="text-tableHead">
            <TableHead className="">Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="flex items-center  gap-2">
              <img src={avatar1} alt="" />{" "}
              <h2 className="text-table1">Marcus Bergson</h2>
            </TableCell>
            <TableCell className="text-neutral">16th Nov, 2023</TableCell>
            <TableCell className="text-tableCell">$50,000</TableCell>
            <TableCell className="text-green-500">paid</TableCell>
            <TableCell className="flex items-center  justify-center gap-1">
              <img src={doc} alt="" /> <p className="text-tableCell">view</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <img src={avatar2} alt="" /> <h2>Jaydon Vaccaro</h2>
            </TableCell>
            <TableCell className="text-neutral">14th Nov, 2023</TableCell>
            <TableCell className="text-tableCell">$150,000</TableCell>
            <TableCell className="text-red-500">Refund</TableCell>
            <TableCell className="flex items-center justify-center gap-1">
              <img src={doc} alt="" /> <p className="text-tableCell">view</p>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex items-center gap-2">
              <img src={avatar3} alt="" /> <h2>Corey Schleifer</h2>
            </TableCell>
            <TableCell className="text-neutral">18th Nov, 2023</TableCell>
            <TableCell className="text-tableCell">$50,000</TableCell>
            <TableCell className="text-green-500">paid</TableCell>
            <TableCell className="flex items-center justify-center gap-1">
              <img src={doc} alt="" /> <p className="text-tableCell">view</p>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex items-center gap-2">
              <img src={avatar4} alt="" /> <h2>Cooper Press</h2>
            </TableCell>
            <TableCell className="text-neutral">17th Nov, 2023</TableCell>
            <TableCell className="text-tableCell">$50,000</TableCell>
            <TableCell className="text-red-500">Refund</TableCell>
            <TableCell className="flex items-center justify-center gap-1">
              <img src={doc} alt="" /> <p className="text-tableCell">view</p>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex items-center  gap-2">
              <img src={avatar5} alt="" /> <h2>Phillip Lubin</h2>
            </TableCell>
            <TableCell className="text-neutral">16th Nov, 2023</TableCell>
            <TableCell className="text-tableCell"> $50,000</TableCell>
            <TableCell className="text-green-500">paid</TableCell>
            <TableCell className="flex items-center justify-center gap-1">
              <img src={doc} alt="" /> <p className="text-tableCell">view</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TableSection;
