
class Auth {
    static authenticate(token, role) {
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
    }

    static isAuthenticated() {
        return localStorage.getItem("token") !== null;
    }

    static getRole() {
        return localStorage.getItem("role");
    }

    static getToken() {
        return localStorage.getItem("role");
    }

    static deAuthenticate() {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
    }
}

export default Auth;