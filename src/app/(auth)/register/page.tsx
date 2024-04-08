import RegisterForm from "./register-form";

const RegisterPage = () => {

    return (
        <div>
            <h1 className="textx-xl font-semibold text-center">Đăng Ký</h1>
            <div className="flex justify-center">
                <RegisterForm />
            </div>
        </div>
    );
}

export default RegisterPage;