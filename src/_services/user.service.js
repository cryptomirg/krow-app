import config from '../configuration/aws-config.json';
import Auth from '@aws-amplify/auth';

export const userService = {
    login,
    logout,
    register,
    getCurrentUser
};

async function login(email, password) {
    try {
        const user = await Auth.signIn(email, password);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

async function logout() {
    try {
        console.log('logging out');
        await Auth.signOut();
    } catch (error) {
        console.log(error);
    }
}

async function getCurrentUser() {
    try {
        const user = await Auth.currentAuthenticatedUser({
            bypassCache: true
        });
        console.log(user);
        return { user };
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function register(email, password) {
    try {
        const user = await Auth.signUp({
            username: email,
            password: password
        });

        return { user };
    } catch (error) {
        console.log(error);
    }
}
