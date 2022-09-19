import logo from './logo.svg';
import './App.css';
import store from "./redux/store"
import { Provider } from "react-redux"

import { PageHeader , Button, Row, Col} from 'antd';

import ListCourse from './components/courses/listCourse/listCourses';
import AddCourses from './components/courses/addCourse/addCourses';
import Visualizer from './components/courses/visualizer/visualizer';

function App() {
  return (
    <Provider store={store}>
      <PageHeader
        className="site-page-header"
        title="Performance Visualizer "
        ghost={true}
        extra={[
          <a href='https://pushpendrahpx.me'><Button key="1">About Developer</Button></a>
        ]}
      />
      <Row>
        <Col span={12}><AddCourses /></Col>
        <Col span={12}><ListCourse /></Col>
      </Row>
      <Row>
        <Col span={24}> <Visualizer /> </Col>
      </Row>
    </Provider>
  );
}

export default App;
