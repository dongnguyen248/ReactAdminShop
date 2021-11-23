import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { publicRequest } from '../../requestMethod';

export default function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get('/products');
                // console.log(res.data);
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProducts();
    }, []);

    const handleDelete = (id) => {
        setData(data.filter((item) => item._id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img
                            className='productListImg'
                            src={params.row.img}
                            alt=''
                        />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row._id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline
                            className='productListDelete'
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];
    const handleGetRowId = (e) => {
        return e._id;
    };
    return (
        <div className='productList'>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                getRowId={handleGetRowId}
            />
        </div>
    );
}
