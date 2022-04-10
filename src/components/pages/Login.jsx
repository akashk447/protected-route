import React,{useEffect} from 'react'

const Login = () => {
    useEffect(() => {
        localStorage.removeItem("Name","8102727276")
    }, [])
  return (
    <div className="d-flex justify-content-center align-items-center py-5">

        <div style={{"width":"500px","height":"250px"}}>
            <div className="card border border-success">
              <div className="card-header text-center bg-success text-white">
               Login
              </div>
              <div className="card-body">
              <form>
                  <div className="mb-3 mt-3">
                    <label for="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                  </div>
                  <div className="mb-3">
                    <label for="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                  </div>
                  <div className='text-center'>
                  <button type="submit" className="btn btn-success me-3">Submit</button>
                  <button  className="btn btn-danger">Reset</button>
                  </div>
                </form>
              </div>
              </div> 
            </div>
       
      </div>
  )
}

export default Login