import {User} from "../model/student.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secret = 'jwtclass123$'

export const getStudents = async (req, res) => {
    // collect form
    const {email,password} = req.body
    console.log('collecting form')

    //getting a document from  users collection
    const ActiveUser = await User.findOne({email})

    console.log(ActiveUser)
    //checking if they exist
    if(!ActiveUser){
        return res.send({message: 'account not found'})
    }

    // checking password
    try{
        const isValidPassword = await bcrypt.compare(password, ActiveUser.password)
        console.log(isValidPassword)
        if(isValidPassword){
            const token = await jwt.sign({ user: ActiveUser.id, email: ActiveUser.email  }, secret , {expiresIn: '1h'})
            console.log('login , correct password')
            return res.send({token})
        }else{
            return res.send('password not correct')
        }
    }catch(err){
        console.log(err)
    }
    
}

export const createStudents = async (req, res) => {
    const { name, pass, email } = req.body
    const userEmail = await User.findOne({email})
    if(userEmail){
        console.log('email exist')
        return res.send({message: 'email exist'})
    }
    
    try{
        const password = await bcrypt.hash(pass,7)
        const newUser = new User({ name, password, email })
        await newUser.save()
        res.send({
            newUser
        })

    }catch(error){
        res.send(error)
    }
}

