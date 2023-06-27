//https://randomuser.me/api/
import axios from "axios"
const getUserDetails = async () => {
    //phòng trường hợp link api bị lỗi
    try{
        //thực hiện xong dòng 5 mới đi tiếp (await)
        let response = await axios.get('https://randomuser.me/api/')
        if(response.status != 200) {
            throw 'Failed to get user details'
        }
        if(response.data.results.length > 0) {
            let responseUser = response.data.results[0]
            let user = {}
            user.dateOfBirth = new Date(responseUser.dob.date)
            user.email = responseUser.email ?? ''
            //user.gender = responseUser.gender == 'undefined' ? 'male' : responseUser.gender
            user.gender = responseUser.gender ?? 'male'
            user.userId = `${responseUser.id.name}${responseUser.id.value}`
            user.address = `${responseUser.location.state}, ${responseUser.location.street.name}`
            user.userName = responseUser.login.username ?? ''
            user.url = responseUser.picture.large ?? ''
            user.phone = responseUser.phone ?? ''
            user.registeredDate = new Date(responseUser.registered.date)
            
            return user
        } 
        throw 'User not found'
    } catch(error) {
        throw error
    }
}

const login = ({gmail, password}) => {

}

export default {getUserDetails, login}