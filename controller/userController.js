import Users from "../models/userModel.js";

export const getUsers = async(req, res)=>{
   try {
    const users = await Users.find()
    res.status(200).json(users)

   } catch (e) {
    res.status(500).json({error: e.message})
   }
}

export const getUserById = async(req, res)=>{
   try {
    const user = await Users.findById(req.params.id)
    res.status(200).json(user)

   } catch (e) {
    res.status(500).json({error: e.message})
   }
}

export const createUser = async(req, res)=>{
   try {
    const {name, email, password, phone, address, image} = req.body;
    const isUserExists = await Users.findOne({email})

    if (isUserExists) {
        res.status(400).json({message: "user already exists"})
    }else{
        const user = await Users.create({
            name, 
            email, 
            password, 
            phone, 
            address,
            image,
        })
        res.status(201).json(user);
    }
   
   } catch (e) {
    res.status(500).json({error: e.message})
   }
}

export const updateUser = async(req, res)=>{
   try {
    const {name, email, password, phone, address, image} = req.body;
    const user = await Users.findById(req.params.id)

    
    if(user){
        user.name = name;
        user.email = email;
        user.password = password;
        user.phone = phone;
        user.address = address;
        user.image = image;
       
        const updatedUsers = await user.save()
        if (updatedUsers) {
            res.status(201).json(updatedUsers);
        }
    }else{
        res.status(404).json({message: "User Not Found...😡"})
    }
   
   } catch (e) {
    res.status(500).json({error: e.message})
   }
}


export const login = async(req, res)=>{
    try {
        const {email, password} = req.body;

        const user = await Users.findOne({email})

        if (user) {
            if (password == password) {
                res.status(200).json(user)   
            }else{
                res.status(400).json({message: "Wrong Password..😡"})
            }
        }else{
            res.status(400).json({message: "User Not Found..😡"})
        }
 
    } catch (e) {
     res.status(500).json({error: e.message})
    }
 }
 
 export const deleteUser = async (req, res) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id)
        if (user) {
            res.status(200).json({message: "User Deleted Successfully!"})
        }

    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}