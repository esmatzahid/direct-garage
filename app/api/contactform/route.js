import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { formData, selectedServices, selectedSupportServices } =
      await req.json();

    console.log("selectedServices", selectedServices);
    console.log("selectedSupportServices", selectedSupportServices);

    console.log(formData);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "esmatzahid78@gmail.com",
      to: "esmatzahid78@gmail.com",
      subject: "Email from the Customer",
      text: `
          Garage: ${formData.garage}
          Country: ${formData.country}
          City: ${formData.city}
          Representative: ${formData.representative}
          Designation: ${formData.designation}
          Contact: ${formData.contact}
          Email: ${formData.email}
          Selected Services: ${selectedServices.join(", ")}
          Selected Support Services: ${selectedSupportServices.join(", ")}
        `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
