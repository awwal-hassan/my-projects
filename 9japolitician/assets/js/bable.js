
  

//   //Before you start making a payment request, you should feature detect to ensure that the API is supported by the browser:
// if (window.PaymentRequest) {
//   // Yes, we can use the API
// } else {
//   // No, fallback to the checkout page
//   window.location.href = '/checkout'
// }


// //How to use the paymentMethods parameter
// const paymentMethods = [
//   {
//     supportedMethods: ['basic-card']
//   }
// ]

// const paymentDetails = {
//   total: {
//     label: 'Total Amount',
//     amount: {
//       currency: 'USD',
//       value: 8.49
//     }
//   }
// }

// const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails)


// //But you can limit the supported networks and types of cards. For example, with the following only Visa, MasterCard, and Discover credit cards are accepted:
// const paymentMethods = [
//   {
//     supportedMethods: ['basic-card'],
//     data: {
//       supportedNetworks: ['visa', 'mastercard', 'discover'],
//       supportedTypes: ['credit']
//     }
//   }
// ]
// // ...


// //You can also add additional display items to provide a high-level breakdown of the total:
// const paymentDetails = {
//   total: {
//     label: 'Total Amount',
//     amount: {
//       currency: 'USD',
//       value: 8.49
//     }
//   },
//   displayItems: [
//     {
//       label: '15% Discount',
//       amount: {
//         currency: 'USD',
//         value: -1.49
//       }
//     },
//     {
//       label: 'Tax',
//       amount: {
//         currency: 'USD',
//         value: 0.79
//       }
//     }
//   ]
// }


// //You can use the third optional parameter to request additional information from the user, such as name, email address, and phone number:
// // ...
// const options = {
//   requestPayerName: true,
//   requestPayerPhone: true,
//   requestPayerEmail: true
// }

// const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails, options)


// //The show() method returns a promise that resolves with a PaymentResponse object if the user has successfully filled in the details. If there is an error or the user closes the UI, the promise rejects.
// // ...
// const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails, options)

// paymentRequest
//   .show()
//   .then(paymentResponse => {
//     // close the payment UI
//     paymentResponse.complete().then(() => {
//       // TODO: call REST API to process the payment at the backend server
//       // with the data from `paymentResponse`.
//     })
//   })
//   .catch(err => {
//     // user closed the UI or the API threw an error
//     console.log('Error:', err)
//   })


// //Let's create a mock function for payment processing with the backend server. It takes paymentResponse as a parameter and returns a promise after 1.5 seconds that resolves to a JSON object:
// const processPaymentWithServer = paymentResponse => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ status: true })
//     }, 1500)
//   })
// }

// //...
// paymentRequest
//   .show()
//   .then(paymentResponse => {
//     processPaymentWithServer(paymentResponse).then(data => {
//       if (data.status) {
//         paymentResponse.complete('success')
//       } else {
//         paymentResponse.complete('fail')
//       }
//     })
//   })
//   .catch(err => {
//     console.log('Error:', err)
//   })


// //If you want to cancel the payment request due to no activity or any other reason, you can use the PaymentRequest.abort() method. It immediately closes the payment request UI and rejects the show() promise.
// // ...
// setTimeout(() => {
//   paymentRequest
//     .abort()
//     .then(() => {
//       // aborted payment request
//       console.log('Payment request aborted due to no activity.')
//     })
//     .catch(err => {
//       // error while aborting
//       console.log('abort() Error: ', err)
//     })
// }, 5000)

