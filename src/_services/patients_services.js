/**Import des modules néccessaires */
import Axios from './caller.services'

let getAllpatients = () => {
    return Axios.get('/patients')
}

let addPatients = (credentials) => {
    return Axios.post('/patients', credentials)
}

export const patientService = {
    getAllpatients,
    addPatients
}