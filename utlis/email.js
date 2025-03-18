import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "esmatzahid78@gmail.com",
    pass: "trxn gwai yshs aajs",
  },
  tls: {
    rejectUnauthorized: false, // Ignore SSL verification errors
  },
});


export const sendBookingConfirmation = async (bookingDetails) => {
  const {
    passengerDetails,
    selectedCar,
    selectedModel,
    selectedServices,
    date,
    time,
  } = bookingDetails;
console.log("bookingDetails", bookingDetails);
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: passengerDetails.email,
    subject: "Booking Confirmation - Direct Garage",
    html: `
      <h2>Thank you for your booking!</h2>
      <p>Dear ${passengerDetails.name} ${passengerDetails.lastName},</p>
      <p>Your booking has been confirmed with the following details:</p>
      <ul>
        <li><strong>Vehicle:</strong> ${selectedCar} ${selectedModel}</li>
        <li><strong>Services:</strong> ${selectedServices.join(", ")}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
      </ul>
      <p>If you have any questions, please don't hesitate to contact us.</p>
      <p>Best regards,<br>Direct Garage</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
