import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import { RouteComponentProps } from "react-router";

export const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/about">关于</Link></li>
                <li><Link to="/topics">主题列表</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
);

export const Home = () => (
    <div>
        <h2>首页</h2>
    </div>
);

export const About = () => (
    <div>
        <h2>关于</h2>
    </div>
);

export const Topics = ({ match }: RouteComponentProps<any>) => (
    <div>
        <h2>主题列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>请选择一个主题</h3>
        )} />
    </div>
);

export const Topic = ({ match }: RouteComponentProps<any>) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);
