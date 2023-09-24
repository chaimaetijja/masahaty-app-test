
import users from './data';

const getUsers = async (offSet: number, limit: number) =>{
    console.log('get user data', )
    return {data: users.slice(offSet,limit+offSet), total: users.length}
}


export default getUsers