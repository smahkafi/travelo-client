import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';

const MyBookings = () => {
    const [mybookings, setMybookings] = useState([])

    useEffect(() => {
        fetch('http://localhost:5001/bookings')
            .then(res => res.json())
            .then(data => setMybookings(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5001/bookings/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                alert('Deleted Booking Is Successfully')
                const remaining = mybookings.filter(mybooking => mybooking._id !==id)
                setMybookings(remaining);
            }
        })

    }

    return (
        <div>
            <div className="row">
                {
                    mybookings.map(mybooking => <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4" key={mybooking._id} mybooking={mybooking}>
                            <div>
                                <img src={mybooking.img} alt="" />
                            </div>
                            <div>
                                <h2>Placer Name: {mybooking.Name}</h2>
                                <p>Address: {mybooking.address}</p>
                                <p>Email: {mybooking.email}</p>
                                <p>img: {mybooking.phone}</p>
                                <p>name: {mybooking.name}</p>
                                <p>price: {mybooking.price}</p>
                                <p>rating: {mybooking.rating}</p>
                                <p>tourcomplete: {mybooking.tourComplete}</p>
                                <p>city: {mybooking.city}</p>
                            </div>
                            <Button onClick={() =>  handleDelete(mybooking._id)} className='btn-danger'>Cancle Order</Button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyBookings;












// {
//     mybookings.map(mybooking => <div className="col-sm-12 col-md-6 col-lg-4" key={mybooking._id} mybooking={mybooking}>
//         <div>
//             <img src={mybooking.img} alt="" />
//         </div>
//         <div>
//             <h2>Placer Name: {mybooking.Name}</h2>
//             <p>Address: {mybooking.address}</p>
//             <p>Email: {mybooking.address}</p>
//             <p>img: {mybooking.address}</p>
//             <p>name: {mybooking.address}</p>
//         </div>

//         {/* address city email img name phone price rating time tourComplete */}

//     </div> )
// }