import { useSelector } from 'react-redux';
import s from './Container.module.css';
const Container = ({ children }) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    return (
        <div className={isLoggedIn ? s.containerLoggedIn : s.container}>
            {children}
        </div>
    );
};

export default Container;
