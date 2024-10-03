import serviceModel from "../models/serviceModel.js"

const addService = async (req, res) => {
    try {
        const { title, details, image } = req.body
        console.log(req.body)

        const serviceData = {
            title,
            details,
            image
        }
        console.log(serviceData)

        const service = new serviceModel(serviceData)
        await service.save()

        res.json({success : true, message : "Service Added"})

    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}


const listService = async (req, res) => {
    try {
        const service = await serviceModel.find({})
        res.json({success : true, service})
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

const singleService = async (req, res) => {
    try {
        const service = await serviceModel.findById(req.params.id)
        res.json({success : true, service})
    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

const removeService = async (req, res) => {
    try {
        await serviceModel.findByIdAndDelete(req.headers.id)
        res.json({success : true, message : "Service Removed"})

    } catch (error) {
        console.log(error)
        res.json({success : false, message : error.message})
    }
}

export { addService, listService, singleService, removeService }