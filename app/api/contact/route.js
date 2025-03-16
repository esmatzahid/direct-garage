import { NextResponse } from "next/server";
import Contact from "@/models/contact";
import connectDB from "@/models/dbConnect";
import { sendBookingConfirmation } from "@/utlis/email";

export async function POST(req) {
  try {
    // Connect to database
    await connectDB();

    // Get request body
    const body = await req.json();

    // Create new contact
    const contact = await Contact.create(body);

    // Send confirmation email
    const emailSent = await sendBookingConfirmation(body);

    return NextResponse.json(
      {
        message: "Contact saved successfully",
        contact,
        emailSent,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      {
        error: "Error saving contact information",
      },
      { status: 500 }
    );
  }
}
// Get all contacts
export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      {
        error: "Error fetching contacts",
      },
      { status: 500 }
    );
  }
}
