import axios from 'axios'

export const getVisitorList = async () => {
    const res = await axios
        .get('/visitors/all_visitors', {
            headers: { 'Content-Type': 'application/json' }
        })
    return res.data
}

export const getVisitorData = async (id) => {
    const res = await axios
        .get(`/visitors/all_visitors/${id}`, {
            headers: {'Content-Type': 'application/json'}
        })
    return res.data
}

export const deleteVisitor = async (id) => {
    try {
        const response = await axios
            .delete(`/visitors/all_visitors/${id}`, {
                headers: { 'Content-Type': 'application/json' }
            })
        
        console.log(response)
    } catch (error) {
        console.log(error)
    }
  }
