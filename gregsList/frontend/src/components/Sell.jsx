import React from 'react'

export default function Sell ()
{
    return (
        <div className='Sell--container'>
            <div class="Sell--form">
                <div class="Sell--inputfield">
                    <label>Item Name :</label>
                    <input type="text" class="input" />
                </div>  
                <div class="Sell--inputfield">
                    <label>Item Description :</label>
                    <input type="textarea" class="input" />
                </div>  
                <div class="Sell--inputfield">
                    <label>Item Price :</label>
                    <input type="number" class="input" />
                </div>  
                <div class="Sell--inputfield">
                    <label>Upload Item Image :</label>
                    <input type="file" class="input" />
                </div> 
                <div class="inputfield">
                <input type="submit" value="Register" class="btn" />
                </div>
            </div>
        </div>
    )
}