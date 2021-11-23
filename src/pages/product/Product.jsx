import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import { useLocation } from 'react-router';
import { publicRequest } from '../../requestMethod';
import { useEffect, useState } from 'react';
export default function Product() {
    let location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/products/find/' + id);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProduct();
    }, [id]);
    return (
        <div className='product'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'></h1>
                <Link to='/newproduct'>
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>
            <div className='productTop'>
                <div className='productTopLeft'>
                    <Chart
                        data={productData}
                        dataKey='Sales'
                        title='Sales Performance'
                    />
                </div>
                <div className='productTopRight'>
                    <div className='productInfoTop'>
                        <img
                            src={product.img}
                            alt=''
                            className='productInfoImg'
                        />
                        <span className='productName'>{product.title}</span>
                    </div>
                    <div className='productInfoBottom'>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>id:</span>
                            <span className='productInfoValue'>
                                {product._id}
                            </span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>sales:</span>
                            <span className='productInfoValue'>5123</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>active:</span>
                            <span className='productInfoValue'>yes</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>in stock:</span>
                            <span className='productInfoValue'>no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productBottom'>
                <form className='productForm'>
                    <div className='productFormLeft'>
                        <label>Product Name</label>
                        <input type='text' placeholder={product.title} />
                        <label>In Stock</label>
                        <select name='inStock' id='idStock'>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                        <label>Active</label>
                        <select name='active' id='active'>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className='productFormRight'>
                        <div className='productUpload'>
                            <img
                                src={product.img}
                                alt=''
                                className='productUploadImg'
                            />
                            <label htmlFor='file'>
                                <Publish />
                            </label>
                            <input
                                type='file'
                                id='file'
                                style={{ display: 'none' }}
                            />
                        </div>
                        <button className='productButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
