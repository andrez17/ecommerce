import React from 'react'

export const Shipping = () => {
    return (
        <div className="shipping-container">
            <div className="shipping-header">
                <h1>FAST AND EASY WAYS TO GET YOUR GEAR</h1>
            </div>
            <div className="shipping-boxes">
                <div>
                    <div className="shipping1">
                        <img src="https://cdn.tangeroutlet.com/Icons/Services_icons/55695_CurbsidePickup%20Icon_Black.png" />
                    </div>
                    <h2>Curbside.</h2>
                </div>
               <div>
                   <div className="shipping2">
                        <img src="https://www.iconpacks.net/icons/2/free-store-icon-1977-thumb.png"/>
                    </div>
                    <h2>In-Store Pickup.</h2>
               </div>
                <div>
                    <div className="shipping3">
                        <img src="https://cdn3.iconfinder.com/data/icons/outline-shoping/512/BOX-01-512.png"/>
                    </div>
                    <h2>Delivery.</h2>
                </div>
                
            </div>
            
        </div>
    )
}

