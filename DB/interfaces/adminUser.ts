export interface IAdminUser{
    name:string
    totalAmount:number
    transaction:[{
        date:Date,
        desc:string
        amount:number
    }]
}