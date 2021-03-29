import axios from 'axios';

export const register = async newVisitor => {
    try {
    const response = await axios
      .post('visitors/new_visitor', {
        name: newVisitor.name,
        license: newVisitor.license,
        phone: newVisitor.phone,
        address: newVisitor.address,
        purpose: newVisitor.purpose
      })
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}

export const getCompanyList = async user => {
  try {
    const response = await axios
      .get('users/all_users', {
        headers: {'Content-Type': 'application/json'}
      })
      console.log(response)
  } catch (error) {
    console.log(error)
  }
}

  /* export const edit = async (editVisitor,id) => {
    try{
      const response = await axios
        .put(`visitors/all_visitors/${id}/edit`,{
            name: editVisitor.name,
            email: editVisitor.email,
            phone: editVisitor.phone,
            address: editVisitor.address,
            purpose: editVisitor.purpose
        })
        console.log('Visitor Updated')
    }
    catch(err){
      console.log(err)
    }
  } */