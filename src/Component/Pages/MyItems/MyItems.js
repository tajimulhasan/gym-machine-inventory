import React, { useEffect, useState } from 'react';
import './MyItems.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyItem from './MyItem/MyItem';
import Swal from 'sweetalert2';
const MyItems = () => {
         const [myItems, setmyItems] = useState([]);
         const [message, setMessage] = useState('');
         const [user] = useAuthState(auth);
         const email = user.email;
         useEffect(() =>{
            fetch(`http://localhost:5000/inventory/email/${email}`)
            .then(res => res.json())
            .then(data => {
                if(data.length === 0){
                    setMessage('No item added (empty)')
                }
                else{
                    setmyItems(data);
                }
            })
         }, [myItems]);
         const handleMyItem = itemId =>{
           const isConfirm = window.confirm('Are you sure you want to delete this item?');
           if(isConfirm){
            const url = `http://localhost:5000/inventory/${itemId}`;
            fetch(url, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                const remaining = myItems.filter(MyI => MyI._id !== itemId);
                setmyItems(remaining);
                console.log(data);
            })
            Swal.fire({
                title: 'Successfully deleted!',
                icon: 'success',
                confirmButtonText: 'Continue'
              })
           }
         }
    return (
        <div><br />
            <h3 className='text-center mb-3'>My Items</h3><br />
            <p className='message'>{message}</p>
              <div className="my-Items">
              {
                myItems.map(mi => <MyItem key={mi._id} myItem={mi} handleMyItem={handleMyItem}></MyItem>)
              }
              </div>
        </div>
    );
};

export default MyItems;