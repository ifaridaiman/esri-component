import React from 'react'

type Props = {
    data:any
}

const TableCollapse:React.FC<Props> = ({
    data
}) => {
    const {headers,subheaders,rows} = data 
    return (
        <>
            <div className='w-full flex justify-between pt-4'>
                <div className='column-left flex justify-center'>
                    {/* <SearchInput placeholder={'Search...'} createOnChange={ (e) => setQuery(e.target.value)}/> */}
                </div>
                <div className='column-right'>
                </div>
            </div>

            <table key="table.id" className='w-full border-separate border-spacing-y-2 font-karla pt-2'>
                <thead key="thead">
                    <tr>
                        <>
                            <th className='p-4 border-b-2 text-left bg-gray-200 rounded-tl-lg' key="empty-th"></th>
                                {
                                    headers && headers.map((header:any, i:number) => {
                                        const {label, accessor, sortable} = header;
                                        return(
                                            <th key={accessor} className={`${"p-4 border-b-2 text-left text-gray-500 bg-gray-200"} ${
                                                sortable ? "cursor-default" : "cursor-not-allowed"
                                            }`}
                                            >
                                                {label}
                                            </th>
                                        )
                                    })
                                }
                            <th key="actions" className='p-4 border-b-2 text-left text-gray-500 bg-gray-200 rounded-tr-lg'>Actions</th>
                        </>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows && rows.map((values:any, r:number) => {
                            return(
                                <tr key={r}>
                                    {
                                        Object.keys(values) && Object.keys(values).map((v:any, rr:number) => {
                                            console.log(Object.values(values));
                                            return(
                                                <td key={rr}>{Object.values(v)}</td>
                                            )
                                        })
                                    }
                                </tr>
                                
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableCollapse