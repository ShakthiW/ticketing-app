import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const TicketSchema = new Schema(
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,
    },
    {
        // createdAt,updatedAt fields are automatically added into records
        timestamps: true,
    }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema);
export default Ticket;