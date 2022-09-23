import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = ({isLoggedIn}) => {

    return(
        <Router>
            <Routes>
                {isLoggedIn
                // 로그인되었을 때,
                ?<>
                    <Route path='/' element={<Home/>}/>
                </>
                // 로그인안되었을 때,
                :<>
                    <Route path='/' element={<Auth/>}/>
                </>}
            </Routes>
        </Router>
    )
}

export default AppRouter;