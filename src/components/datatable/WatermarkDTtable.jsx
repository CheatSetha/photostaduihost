'use client'
import React, { useMemo } from 'react';
import DataTable from 'react-data-table-component';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DateRangeSelector from '../datetimecomponent/DateRangeSelector';
const data = [
  { watermark: 14, user: 'John Doe', date: '2023-06-22' },
  { watermark: 20, user: 'Jane Smith', date: '2023-06-23' },
  { watermark: 30, user: 'Bob Johnson', date: '2023-06-24' },
];

const columns = [
  {
    name: 'Number of Watermark',
    selector: 'watermark',
    sortable: true,
  },
  {
    name: 'User',
    selector: 'user',
    sortable: true,
  },
  {
    name: 'Date',
    selector: 'date',
    sortable: true,
  },
];



const WatermarkDataComponent = () => {
  const subHeader = React.useMemo(()=>{
    return (
       
            <div className='absolute left-0'>
              <DateRangeSelector /> 
            </div>
       
    )
},[])
  return (
    <DataTable
      title="Generated Watermark"
      columns={columns}
      data={data}
      pagination
      responsive
      subHeader
      subHeaderComponent={subHeader}
    />
  );
};

export default WatermarkDataComponent;
