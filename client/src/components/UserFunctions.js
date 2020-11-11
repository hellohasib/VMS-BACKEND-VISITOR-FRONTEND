import axios from 'axios'

export const register = async newUser => {
    try {
    const response = await axios
      .post('users/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        phone: newUser.phone,
        company_name: newUser.company_name,
        password: newUser.password
      })
    console.log(response)
  } catch (err) {
    console.log(err)
  }
  }
  
  export const login = async user => {
    try {
      const response = await axios
        .post('users/login', {
          email: user.email,
          password: user.password
        });
      localStorage.setItem('usertoken', response.data);
      return response.data
    } catch (err) {
      console.log(err)
    }
  }