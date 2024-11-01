const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Please enter the name"]
        },
        email: {
            type: String,
            required: [true, "Please enter the email"]
        },
        senha: {
            type: String,
            required: [true, "Please enter the senha"]
        },
        tipo_usuario: {
            type: String,
        },
        cpf: {
            type: String,
        },
        cep: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;