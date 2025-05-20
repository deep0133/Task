import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  bookingsTriggerAtom,
  currentBookingSelector,
  dataSelector,
} from "../../recoil/atom/dashboardAtom";

const BookingTable = () => {
  const bookings = useRecoilValue(dataSelector);
  const currentBookings = useRecoilValue(currentBookingSelector);
  const localStorageChanged = useSetRecoilState(bookingsTriggerAtom);

  const bookingUpdateHandler = (id, status) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status } : b));
    localStorage.setItem("bookings", JSON.stringify(updated));
    localStorageChanged((prev) => prev + 1);
  };
  return (
    <div className='overflow-auto mb-5'>
      <table className='w-full table-auto min-w-3xl border mb-4'>
        <thead className='bg-gray-200'>
          <tr>
            <th className='border p-2'>User Name</th>
            <th className='border p-2'>Service Name</th>
            <th className='border p-2'>Date/Time</th>
            <th className='border p-2'>Status</th>
            <th className='border p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBookings?.length > 0 ? (
            currentBookings?.map((b) => (
              <tr key={b.id} className='text-center'>
                <td className='border p-2'>{b?.userName}</td>
                <td className='border p-2'>{b?.serviceName}</td>
                <td className='border p-2'>
                  {new Date(b?.dateTime)?.toLocaleString()}
                </td>
                <td className='border p-2'>{b.status}</td>
                <td className='border p-2 space-x-2'>
                  <button
                    className='bg-green-500 text-white px-2 py-1 rounded'
                    onClick={() => bookingUpdateHandler(b?.id, "Confirmed")}
                  >
                    Confirm
                  </button>
                  <button
                    className='bg-red-500 text-white px-2 py-1 rounded'
                    onClick={() => bookingUpdateHandler(b?.id, "Cancelled")}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5' className='text-center py-6 text-gray-500'>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
