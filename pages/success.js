import Link from 'next/link';
import React, { useEffect } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../pages/components/lib/utils';


const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success

// import Link from 'next/link';
// import React, { useEffect } from 'react';
// import BsBagCheckFill from 'react-icons/bs';
// // import { useRouter } from 'next/router';
// import { useStateContext } from '../context/StateContext';
// import { runFireworks } from './components/lib/utils';

// const success = () => {

//     const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

//     useEffect(() => {
//         localStorage.clear();
//         setCartItems([]);
//         setTotalPrice(0);
//         setTotalQuantities(0)
//         runFireworks();
//     }, [])

//   return (
//     <div className='success-wrapper'>
//         <div className='success'>
//             <p className='icon'>
//                 <BsBagCheckFill/>
//             </p>
//             <h2>Thank you for your order !</h2>
//             <p className='email-msg'>Check your Email inbox for reciept</p>
//             <p className='description'>If you have any question, please email
//                 <a className='email' href='mailto:order@example.com'>mailto:order@example.com</a>
//             </p>
//             <Link href="/">
//                 <button width="300px" type='button'>
//                     Continue Shopping
//                 </button>
//             </Link>
//         </div>
//     </div>
//   )
// }

// export default success