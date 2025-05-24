import { users } from "../route";

export async function GET(req:Request, { params }: { params: { id: string } }){
    const {id} = await params;
    const user = users.find((user)=>user.id === parseInt(id));
    return Response.json(user); 
}

export async function PATCH(req:Request, { params }: { params: { id: string } }){
    const {id} = await params;
    const user = users.find((user)=>user.id === parseInt(id));
    user.name="Updated User Name"; 
    return Response.json(user);
}