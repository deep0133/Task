import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import BookingTable from "../components/dashboard/BookingTable";
import FilterBar from "../components/dashboard/FilterBar";
import Pagination from "../components/dashboard/Pagination";
import {
  currentPageAtom,
  dataSelector,
  totalPageSelector,
} from "../recoil/atom/dashboardAtom";
import { useEffect } from "react";
import BiaxialChart from "../components/dashboard/BiaxialChart";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);

  // Booking Data State
  const loadableBookings = useRecoilValueLoadable(dataSelector);

  const totalPages = useRecoilValue(totalPageSelector);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages, setCurrentPage]);

  if (loadableBookings.state === "loading") return <div>Loading...</div>;
  if (loadableBookings.state === "hasError")
    return <div>Error loading data</div>;

  const bookings = loadableBookings.contents;

  return (
    <div className='p-4 inner_responsiveWidth mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Booking Admin Dashboard</h1>
      <DashboardStats bookings={bookings} />
      <FilterBar />
      <BiaxialChart />
      <BookingTable />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Dashboard;

const DashboardStats = ({ bookings }) => {
  const total = bookings.length;
  const confirmed = bookings.filter((b) => b.status === "Confirmed").length;
  const pending = bookings.filter((b) => b.status === "Pending").length;
  const cancelled = bookings.filter((b) => b.status === "Cancelled").length;

  return (
    <div className='mb-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
      <div className='p-4 bg-blue-100 rounded shadow'>Total: {total}</div>
      <div className='p-4 bg-green-100 rounded shadow'>
        Confirmed: {confirmed}
      </div>
      <div className='p-4 bg-yellow-100 rounded shadow'>Pending: {pending}</div>
      <div className='p-4 bg-red-100 rounded shadow'>
        Cancelled: {cancelled}
      </div>
    </div>
  );
};
