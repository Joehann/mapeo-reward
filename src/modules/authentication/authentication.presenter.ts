export const authenticationPresenter = () => {
    const handleLogin = (navigate: (path: string)=>void): void => {
        void navigate('/')
    }

    const handleLogout = (navigate: (path: string)=>void): void => {
        void navigate('/login')
    }

    return {
        handleLogin,
        handleLogout,
    }
}