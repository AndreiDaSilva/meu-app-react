function Login() {
    return (
        <div className="text-center">
            <div className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4" src="http://cdn.onlinewebfonts.com/svg/img_311846.png" alt="icon-login" width="72" height="72" />
                        <h1 className="h3 mb-3 fw-normal">Faça Login</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">User</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Lembre-me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login