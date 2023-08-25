

export const userSignup (request,response)=>{
    try{
        console.log(request.body);
    }catch(error){
        console.log('Error while calling signup API ', error);
    }
};