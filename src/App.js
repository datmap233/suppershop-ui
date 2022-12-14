import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
import images from './assets/images';

function App() {
    return (
        <div id="home" style={{backgroundImage: `url(${images.bg})`}}>
            <div className="wrapper">
                <Router>
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.components;
                                let Layout = DefaultLayout;
                                if (route.layout) Layout = route.layout;
                                else if (route.layout === null) Layout = Fragment;

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </Router>
            </div>
        </div>
    );
}
export default App;
