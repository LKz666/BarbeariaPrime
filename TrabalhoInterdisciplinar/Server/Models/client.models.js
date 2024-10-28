const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the name"],
        },
        email: {
            type: String,
            required: [true, "Please enter the email"],
        },
        number: {
            type: Number,
            default: 0,
        },
        password: {
            type: String,
            required: [true, "Please enter the password"],
        }
    },
    {
        timestamps: true
    }
)

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;