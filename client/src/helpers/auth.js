export const authenticate = (res, next) => {
    localStorage.setItem('user', JSON.stringify(res.data.user.username))
    next();
}

export const isAuth = () => {
    const loggedUser = localStorage.getItem('user');
    if(loggedUser){
        return JSON.parse(loggedUser);
    } else {
        return false;
    }
}

export const logout = next => {
    localStorage.removeItem('user');
    next()
}