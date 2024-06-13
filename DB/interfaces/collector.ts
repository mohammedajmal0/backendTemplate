export interface ICollector{
    name:string
    username:string
    password:string
    status:'active'|'deleted'
    createdAt:Date
    userType:'collector'
}