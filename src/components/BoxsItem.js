import React, { useState } from 'react'
import ItemInfo from './ItemInfo';


export default function BoxItem({ posts, loading }) {

    const [view, setView] = useState(false)

    if (loading) {
        return <h2 className='text-center'>Loading...</h2>
    }

    const viewDetails = () => {
        setView(current => !current);
    }

    return (

        <div >
            {posts.map(post => (
                <div className='my-3 ' key={post.email} >
                    <div className="card" >
                        <div className="card-body d-flex justify-content-around align-items-center bg-body-secondary">
                            <h5 className="card-title d-flex align-items-center">{post.name}</h5>
                            <div>
                                <h5>CONTACT</h5>
                                <p>{post.name}</p>
                            </div>
                            <div>
                                <h5>CITY</h5>
                                <p>{post.address.city}</p>
                            </div>
                            <div>
                                <h5>STATE</h5>
                                <p>{post.address.zipcode}</p>
                            </div>
                            <button type="button" className="btn btn-dark" onClick={viewDetails}>View details</button>
                        </div>
                    </div>
                    {view ? (<ItemInfo name={post.name} email={post.email} phone={post.phone} username={post.username} address={post.address} website={post.website} />) : null
                    }
                </div>
            ))}
        </div>
    );
}

