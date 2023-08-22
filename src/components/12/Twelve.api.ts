import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Response } from './Twelve.types';

// locally e.g. http://localhost:3000/proxy/
const proxyUrl = import.meta.env.VITE_PROXY_URL;

// e.g. https://mese.webuntis.com/WebUntis/api/public/timetable/weekly/data
const url = encodeURIComponent(import.meta.env.VITE_API_URL);

// Cookie with schoolname
// schoolname="_YmJzIGJpbmdlbg=="
export const timeTableApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: proxyUrl + url,
  }),
  endpoints: (builder) => ({
    getClasses: builder.query<Response, { date: string; elementId: number; elementType: number; formatId: number }>({
      providesTags: ['classes'],
      query: (args) => {
        const { date, elementId, elementType, formatId } = args;
        return {
          params: {
            date,
            elementId,
            elementType,
            formatId,
            headers: JSON.stringify({
              Cookie: 'schoolname="_YmJzIGJpbmdlbg=="',
            }),
          },
          url: '',
        };
      },
    }),
  }),
  reducerPath: 'timeTable',
  tagTypes: ['classes'],
});

export const { useGetClassesQuery } = timeTableApi;
