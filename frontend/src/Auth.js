import api from './api'


class Auth {

    static isAuth;

    static authenticate(token, role) {
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
    }

    static async isAuthenticated(email) {
        try {
            const result = await api.post("/users/getTokenAndRole", { email });
            if (!result) {
                console.error("Email not found!");
                return;
            }
            Auth.isAuth = (localStorage.getItem("token") === result.data.token && localStorage.getItem("role") === result.data.role);
            return Auth.isAuth;
        } catch (err) {
            return;
        }
    }




    static getRole() {
        return localStorage.getItem("role");
    }

    static getToken() {
        return localStorage.getItem("token");
    }

    static deAuthenticate() {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        Auth.isAuth = false;
    }
}

export default Auth;