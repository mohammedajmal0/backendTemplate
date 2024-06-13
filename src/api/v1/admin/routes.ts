import express from 'express'
import AuthHandler from '../../../../middleware/authHandler'
import UserTypeHandler from '../../../../middleware/getUserType'
const adminRouter=express.Router()

adminRouter.post('/registerCollector',AuthHandler.authMiddleware,UserTypeHandler.checkAdmin,
(request:express.Request,response:express.Response)=>{
    
}
)

export default adminRouter
