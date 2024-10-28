const Client = require("../Models/client.models")

const createClient = async (req, res) =>{
    try{
        const client = await Client.create(req.body);
        res.status(200).json(client);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

const getClients = async (req, res) => {
    try{
        const client = await Client.find({});
        res.status(200).json(client);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

const getClient = async (req, res) => {
    try{
        const { id } = req.params;
        const client = await Client.findById(id);
        res.status(200).json(client);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

const upadateClient = async(req, res) =>{
    try{    
        const { id } = req.params;

        const client = await Client.findByIdAndUpdate(id, req.body);

        if(!client){
            return res.status(404).json({message: "Client not found"});
        }

        const updateClients = await Client.findById(id);
        res.status(200).json(updateClients);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

const deleteClient = async(req, res) => {
    try{
        const { id } = req.params;
        
        const client = await Client.findByIdAndDelete(id);

        if(!client){
            return res.status(404).json({message: "Client not found"});
        }

        res.status(200).json("User deleted");
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    createClient,
    getClients,
    getClient,
    upadateClient,
    deleteClient
};