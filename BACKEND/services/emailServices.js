const transporter = require('../config/email');

const sendOrderConfirmationEmail = async (userEmail, orderDetails) => {
  const mailOptions = {
    from: 'terminator.terminate2024@gmail.com', 
    to: userEmail,
    subject: 'Order Confirmation',
    text: `
      Dear Customer,

      Your order has been successfully placed. Here are the details:

      Order ID: ${orderDetails.order_id}
      Total Amount: ${orderDetails.amount}
      Products: ${orderDetails.products.map(product => `${product.productName} - ${product.quantity} x ${product.productPrice}`).join(', ')}

      Thank you for your purchase!
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendOrderConfirmationEmail };
