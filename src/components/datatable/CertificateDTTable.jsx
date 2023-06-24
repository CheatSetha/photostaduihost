"use client"
import React, { useMemo } from "react"
import DataTable from "react-data-table-component"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DateRangeSelector from "../datetimecomponent/DateRangeSelector"

const CertificateDataComponent = () => {
    const columns = [
        {
            name: "Number of Created Certificate",
            selector: "certificate",
            sortable: true,
        },
        {
            name: "User",
            selector: "user",
            sortable: true,
        },
        {
            name: "Date",
            selector: "date",
            sortable: true,
        },
    ]
    // handle date rage picker with react-date-range
   
    
    const data = [
        { certificate: 10, user: "John Doe", date: "2021-10-01" },
        { certificate: 2, user: "Jane Smith", date: "2021-10-02" },
        { certificate: 3, user: "Bob Johnson", date: "2021-10-03" },
    ]
    
	const subHeaderComponentMemo = useMemo(() => {
		
		return (
			<div className="absolute left-0 ">
				<DateRangeSelector />
		
			</div>
		)
	}, [])
	return (
		<DataTable
			columns={columns}
			data={data}
			title='Generated Certificate'
			pagination
			paginationPerPage={5}
            subHeader
			subHeaderComponent={subHeaderComponentMemo}
			paginationRowsPerPageOptions={[5, 10, 15]}
		/>
	)
}

export default CertificateDataComponent