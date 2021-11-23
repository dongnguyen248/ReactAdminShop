import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethod';

export default function WidgetSm() {
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
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                {users.map((user) => {
                    return (
                        <li className='widgetSmListItem' key={user._id}>
                            <img
                                src={
                                    user.img ||
                                    'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'
                                }
                                alt=''
                                className='widgetSmImg'
                            />
                            <div className='widgetSmUser'>
                                <span className='widgetSmUsername'>
                                    {user.username}
                                </span>
                                <span className='widgetSmUserTitle'>
                                    Software Engineer
                                </span>
                            </div>
                            <button className='widgetSmButton'>
                                <Visibility className='widgetSmIcon' />
                                Display
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
