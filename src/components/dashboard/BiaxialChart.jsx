import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useRecoilValue } from "recoil";
import { currentBookingSelector } from "../../recoil/atom/dashboardAtom";

export default function BiaxialChart() {
  const bookings = useRecoilValue(currentBookingSelector);

  const groupedChartData = useMemo(() => {
    const map = {};

    bookings.forEach(({ serviceName, status }) => {
      if (!map[serviceName]) {
        map[serviceName] = { name: serviceName };
      }
      map[serviceName][status] = (map[serviceName][status] || 0) + 1;
    });

    return Object.values(map);
  }, [bookings]);

  if (bookings?.length === 0) {
    return (
      <div className='flex justify-center items-center min-h-64 text-3xl font-Rethink_Sans'>
        No Data To Plot Chart.
      </div>
    );
  }

  return (
    <ResponsiveContainer
      width='100%'
      height={400}
      style={{
        maxWidth: 900,
        margin: "auto",
      }}
    >
      <BarChart data={groupedChartData} margin={{ top: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis yAxisId='left' orientation='left' stroke='#8884d8' />
        <YAxis yAxisId='right' orientation='right' stroke='#82ca9d' />
        <Tooltip />
        <Legend />
        <Bar yAxisId='left' dataKey='Cancelled' fill='#8884d8' />
        <Bar yAxisId='right' dataKey='Confirmed' fill='#82ca9d' />
      </BarChart>
    </ResponsiveContainer>
  );
}
