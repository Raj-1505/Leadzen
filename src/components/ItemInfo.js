import React from 'react'

export default function ItemInfo(props) {
  return (
    <div className='container mt-1 border border-dark-subtle rounded  bg-dark-subtle'>
      <div>
        <h5>Description</h5>
        <p>Providing service of domestic flight booking @ lowest price guaranteed and also for railway e ticket booking. also affering international flight tickets. giving services to our customers since 1995. now going to start hajj and umrah very soon for our valuable customers it will be also @ very affordable prices.</p>
      </div>

      <div className='container'>
        <div className='container my-5 mx-2 d-flex container mx-5 justify-content-around '>
          <div>
            <div>
              <h5>Contact Person</h5>
              <p>{props.name}</p>
            </div>
            <div>
              <h5>Designation</h5>
              <p>{props.username}</p>
            </div>
            <div>
              <h5>Email</h5>
              <p>{props.email}</p>
            </div>
            <div>
              <h5>Phone</h5>
              <p>{props.phone}</p>
            </div>
          </div>


          <div>
            <div>
              <h5>Address</h5>
              <p>{props.address.street}</p>
            </div>
            <div>
              <h5>City</h5>
              <p>{props.address.city}</p>
            </div>
            <div>
              <h5>Zip Code</h5>
              <p>{props.address.zipcode}</p>
            </div>
            <div>
              <h5>Website</h5>
              <p>{props.website}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
