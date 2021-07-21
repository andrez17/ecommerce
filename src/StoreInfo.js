import React from 'react'

export const StoreInfo = (props) => {
    let stores = props.locations.length;
    return (
        <div className="storeinfo-container">
            <table>
                <tr>
                    <th>{stores} stores found within 50 miles</th>
                </tr>
                {
                    props.locations.map((item, index) => {
                        return (
                            <tr>
                                <td>
                                    <div className="store-details">
                                       <div className="map-point">
                                        <img alt="" src={`https://mt.google.com/vt/icon/text=${(index+1).toString()}&psize=16&font=fonts/arialuni_t.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=48&scale=1}`}/>
                                        </div>
                                        <div className="address">
                                            <h4>CUMBERLAND</h4>
                                            <p>Cumberland Mall</p>
                                            <p>2860 Cumberland Mall Se, Suite 150</p>
                                            <p>Atlanta, GA 30339</p>
                                            <h4>XXX-XXX-XXXX</h4>
                                        </div>
                                        <div className="hours-of-operation">
                                            <h4>Today's Hours:</h4>
                                            <p>Wednesday 9:00am - 9:00pm</p>
                                        </div>
                                        <div className="store-image">
                                            <img alt="" src="https://image.flaticon.com/icons/png/128/3443/3443338.png"/>
                                        </div> 
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}