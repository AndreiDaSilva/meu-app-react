import { IoMdContact } from 'react-icons/io'
import styles from './FormLogin.module.css'

function FormLogin() {
    return(
        <div className="text-center">
            <div className={styles.form_signin}>
                <form>
                    <IoMdContact size='7em' />
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

export default FormLogin