import { useEffect, useState } from 'react';
import './widgetLg.css';
import { userRequest } from '../../requestMethod';

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>;
    };
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get('/users?new=true');
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, []);
    return (
        <div className='widgetLg'>
            <h3 className='widgetLgTitle'>Latest transactions</h3>
            <table className='widgetLgTable'>
                <tbody>
                    <tr className='widgetLgTr'>
                        <th className='widgetLgTh'>Customer</th>
                        <th className='widgetLgTh'>Date</th>
                        <th className='widgetLgTh'>Amount</th>
                        <th className='widgetLgTh'>Status</th>
                    </tr>
                    {users.map((user) => {
                        return (
                            <tr className='widgetLgTr' key={user._id}>
                                <td className='widgetLgUser'>
                                    <img
                                        src={
                                            user.img ||
                                            'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                        }
                                        alt=''
                                        className='widgetLgImg'
                                    />
                                    <span className='widgetLgName'>
                                        {user.username}
                                    </span>
                                </td>
                                <td className='widgetLgDate'>2 Jun 2021</td>
                                <td className='widgetLgAmount'>$122.00</td>
                                <td className='widgetLgStatus'>
                                    <Button type='Approved' />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
