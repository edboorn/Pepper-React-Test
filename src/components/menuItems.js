import React from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'

const Items = ({ items }) => {
    return (
        <div>
        {items.map((item) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-subtitle text-muted">
                <TextField
                label="Product Description"
                id="standard-full-width"
                defaultValue= {item.description}
                helperText="Input the description of your product to put in your app"
                multiline
                /></h6>
              <p></p>
              <p className="card-text">
              <TextField
              label="Value of Your Product"
              id="standard-start-adornment"
              defaultValue={item.price}
              InputProps={{startAdornment: <InputAdornment position="start">£</InputAdornment>,}}
              /></p>
              <p className="card-text">
              <TextField
              label="Quantity"
              id="standard-start-adornment"
              defaultValue={item.quantity}
              InputProps={{startAdornment: <InputAdornment position="start">Available</InputAdornment>,}}
              /></p>
            </div>
          </div>
        ))}
      </div> 
  )
}

export default Items


