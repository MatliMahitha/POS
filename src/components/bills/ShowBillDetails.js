import React from "react";
import { useSelector } from "react-redux";
import Pdf from "react-to-pdf";
import emailjs from 'emailjs-com'
import Swal from "sweetalert2";
const ref = React.createRef();

const ShowBillDetails = (props) => {
    const { _id } = props.match.params
    const bills = useSelector(state => state.bills.data)
    const bill = (bills.length > 0 && bills.find(ele1 => ele1._id === _id));
    console.log('to',bill.total)
    const products = useSelector(state => state.products.data)
    const customers = useSelector(state => state.customers.data)
    const customer = (customers.length > 0 && customers.find(ele1 => ele1._id === bill.customer))

    const sendMail=()=>{
        emailjs.send("service_tok4ts5","template_rog9csh",{
            to_name: customer.name,
            Bill_Total: bill.total.toString(),
            to_email: customer.email
            },"0rYBfGD31I4G1QB0r")
            .then((res)=>{
                Swal.fire(
                    'Email Sent!',
                    'You clicked the button!',
                    'success'
                  )
            })
            .catch((err)=>alert(err.message))
        }

return (<div >

    {<div ref={ref} >
        <h4 className="p-9" style={{ display: 'inline', float: 'middle' }}>INVOICE</h4> <br /><br />

        <h4 className="p-9" style={{ display: 'inline', float: 'middle' }}> Issue Date: {bill && bill.date.slice(0, 10)}</h4>
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
    </Pdf> <br/>
    <button  className="btn btn-primary m-2" onClick={sendMail}>Send Mail</button>
    
</div>
)
}
export default ShowBillDetails