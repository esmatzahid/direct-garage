import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    selectedCar: {
      type: String,
      required: true,
    },
    selectedServices: {
      type: [String],
      required: true,
    },
    selectedModel: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    passengerDetails: {
      name: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
