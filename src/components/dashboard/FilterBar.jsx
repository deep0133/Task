import { useRecoilState, useRecoilValue } from "recoil";
import {
  dataSelector,
  filterDateAtom,
  filterServiceAtom,
  filterStatusAtom,
  searchAtom,
} from "../../recoil/atom/dashboardAtom";
import { useMemo } from "react";

const FilterBar = () => {
  const [search, setSearch] = useRecoilState(searchAtom);
  const [filterService, setFilterService] = useRecoilState(filterServiceAtom);
  const [filterStatus, setFilterStatus] = useRecoilState(filterStatusAtom);
  const [filterDate, setFilterDate] = useRecoilState(filterDateAtom);

  const bookings = useRecoilValue(dataSelector);

  const serviceList = useMemo(() => {
    return [...new Set(bookings?.map((b) => b?.serviceName))];
  }, [bookings]);

  return (
    <div className='mb-4 grid grid-cols-1 md:grid-cols-4 gap-2'>
      <input
        type='text'
        placeholder='Search by user'
        className='p-2 border rounded'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className='p-2 border rounded'
        value={filterService}
        onChange={(e) => setFilterService(e.target.value)}
      >
        <option value=''>All Services</option>
        {serviceList?.map((s) => {
          return <option value={s}>{s}</option>;
        })}
      </select>
      <select
        className='p-2 border rounded'
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value=''>All Status</option>
        <option value='Pending'>Pending</option>
        <option value='Confirmed'>Confirmed</option>
        <option value='Cancelled'>Cancelled</option>
      </select>
      <input
        type='date'
        className='p-2 border rounded'
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
      />
    </div>
  );
};

export default FilterBar;
