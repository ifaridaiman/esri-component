import React,{useState} from 'react'
import CardWrapper from '../components/CardWrapper/CardWrapper'
import SearchInput from '../components/TableCollapse/SearchInput/SearchInput'
import TableCollapse from '../components/TableCollapse/TableCollapse';
import employeeData from '../data/employee.json'


export const Sprint1 = () => {
  const [query,setQuery] = useState("");

  const [empData] = useState([...employeeData]);


  return (
    <div className='mx-auto' style={{ width:'1120px' }}>
      <CardWrapper>
        <p className="font-bold">Card Wrapper</p>
        <SearchInput placeholder={'Search...'} createOnChange={ (e) => setQuery(e.target.value)}/>
      </CardWrapper>

      <TableCollapse
        data={{
            headers:[
              {
                label:"ID",
                accessor: "deptId",
                sortable: false
              },
              {
                label:"Department Name",
                accessor: "deptName",
                sortable: true
              },
              {
                label:"Salary Min",
                accessor: "minSalary",
                sortable: true
              },
              {
                label:"Salary Median",
                accessor: "medianSalary",
                sortable: false
              },
              {
                label:"Salary Max",
                accessor: "maxSalary",
                sortable: true
              },
            ],
            subheaders:[
              {
                label:"Employee ID",
                accessor: "testId",
                sortable: false
              },
              {
                label:"Employee Name",
                accessor: "empName",
                sortable: true
              },
              {
                label:"Designation",
                accessor: "designation",
                sortable: false
              },
              {
                label:"Salary",
                accessor: "salary",
                sortable: false
              },
            ],
            rows:empData
          }
        }
      />  

    </div>
  )
}
