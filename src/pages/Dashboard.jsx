import SummaryCards from "../components/dashboard/SummaryCards";
import SalesChart from "../components/dashboard/SalesChart";
import RecentOrdersTable from "../components/dashboard/RecentOrdersTable";

const Dashboard = () => (
  <div className="container-fluid">
    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
      <div className="p-3 w-100 h-70">
        <SummaryCards />
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
      <div className="p-3  flex-grow-1 ">
        <SalesChart />
      </div>
      <div className="p-3 flex-grow-1 d-flex flex-wrap">
        <RecentOrdersTable />
      </div>
    </div>
  </div>
);

export default Dashboard;
