import { atom, selector } from "recoil";
import bookingData from "../../data/bookingData";

const BOOKINGS_PER_PAGE = 10;

export const searchAtom = atom({
  key: "search",
  default: "",
});
export const filterServiceAtom = atom({
  key: "filterService",
  default: "",
});
export const filterStatusAtom = atom({
  key: "filterStatus",
  default: "",
});
export const currentPageAtom = atom({
  key: "currentPage",
  default: 1,
});
export const filterDateAtom = atom({
  key: "filterDateAtom",
  default: "",
});

export const bookingsTriggerAtom = atom({
  key: "bookingsTriggerAtom",
  default: 0,
});

export const dataSelector = selector({
  key: "dataSelector",
  get: ({ get }) => {
    get(bookingsTriggerAtom);

    const stored = localStorage.getItem("bookings");
    if (stored) return JSON.parse(stored);
    localStorage.setItem("bookings", JSON.stringify(bookingData));
    return bookingData;
  },
});

export const filteredBookingsSelector = selector({
  key: "filtered",
  get: ({ get }) => {
    const bookings = get(dataSelector);
    const searchText = get(searchAtom);
    const filterService = get(filterServiceAtom);
    const filterStatus = get(filterStatusAtom);
    const filterDate = get(filterDateAtom);

    return bookings.filter(({ userName, serviceName, status, dateTime }) => {
      const matchUser = userName.toLowerCase().includes(searchText);
      const matchService = !filterService || serviceName === filterService;
      const matchStatus = !filterStatus || status === filterStatus;
      const matchDate = !filterDate || dateTime.startsWith(filterDate); // e.g., "2025-05-20"

      return matchUser && matchService && matchStatus && matchDate;
    });
  },
});

// Selector for paginated bookings
export const currentBookingSelector = selector({
  key: "paginatedBookings",
  get: ({ get }) => {
    const filtered = get(filteredBookingsSelector);
    const currentPage = get(currentPageAtom);
    const start = (currentPage - 1) * BOOKINGS_PER_PAGE;
    return filtered.slice(start, start + BOOKINGS_PER_PAGE);
  },
});

export const totalPageSelector = selector({
  key: "totalPage",
  get: ({ get }) => {
    const filteredData = get(filteredBookingsSelector);
    const totalPages = Math.ceil(filteredData.length / BOOKINGS_PER_PAGE);
    return totalPages;
  },
});
