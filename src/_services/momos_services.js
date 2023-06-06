/**Import des modules néccessaires */
import Axios from './caller.services'



// let getPatient = (id) => {
//     return Axios.get('/patients/'+id)
// }


let requestMomo = (credentials) => {
    return Axios.post('/smspayer_meth', credentials) 
}


export const momoService = {
    requestMomo,

}