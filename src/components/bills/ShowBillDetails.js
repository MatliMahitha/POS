import React from "react";
import { useSelector } from "react-redux";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const ShowBillDetails = (props) => {
    const { _id } = props.match.params
    const bills = useSelector(state => state.bills.data)
    const bill = (bills.length > 0 && bills.find(ele1 => ele1._id === _id));
    const products = useSelector(state => state.products.data)
    const customers = useSelector(state => state.customers.data)
    const customer = (customers.length > 0 && customers.find(ele1 => ele1._id === bill.customer))

return (<div >

    {<div ref={ref} >
        <h4 className="p-9" style={{ display: 'inline', float: 'middle' }}>INVOICE</h4> <br /><br />

        <h4 className="p-9" style={{ display: 'inline', float: 'middle' }}> Issue Date:{bill && bill.date.slice(0, 10)}</h4>
        <h4>Customer Name : {customer && customer.name}</h4> <hr />
        {bill && <table style={{ width: '40%', backgroundColor: '#B0E0E6' }} className='table table-striped shadow border rounded'>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                </tr>
            </thead>
            <tbody>

                {
                    products.length > 0 && bill.lineItems.map((ele, i) => {
                        return <tr key={i}>
                            <td>{(products.find(ele1 => ele1._id === ele.product))
                                && (products.find(ele1 => ele1._id === ele.product).name)}</td>
                            <td>{ele.price}</td>
                            <td>{ele.quantity}</td>
                            <td>{ele.subTotal}</td>
                        </tr>
                    })
                }

            </tbody>
        </table>}
    </div>

    }
    <div className="m-3">
        <h2>Final Total : {bill && bill.total}</h2>
    </div>
    <Pdf targetRef={ref} filename="bill.pdf">
        {({ toPdf }) => <button onClick={toPdf} className="btn btn-primary mt-2">Generate Pdf</button>}
    </Pdf>
    
</div>
)
}
export default ShowBillDetails