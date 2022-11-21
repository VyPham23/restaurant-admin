import React, { useEffect } from 'react'
import './Admin.css'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios'

const Admin = () => {
    const [restaurantData, setRestaurantData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const fetchData = async () => {
        await axios.get("http://restaurant-laravel-api.herokuapp.com/api/restaurant")
            .then((resp: any) => {
                setRestaurantData(resp.data.data.data);
                console.log(resp)
            })
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [])

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            width: 70
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 500
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 70
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 200
        },
        {
            field: 'ingredients',
            headerName: 'Ingredients',
            width: 200
        },
    ]

  return (
    <div className='app__admin' style={{ height: "100vh", width: "100%" }}>
        <DataGrid 
            rows={restaurantData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            
        />
    </div>
  )
}

export default Admin