import { Card, Form, Select, Input, Button } from "antd";
import React from "react";

import { useSelector, useDispatch } from 'react-redux'
import {updateMarks} from "./../../../redux/reducers/course.reducer"

let AddCourses = ()=>{

    let dispatch = useDispatch()


    let formSubmitHandle = (values)=>{
        console.log(values)
        // console.log(e.target.quarter.value)
        // console.log(e.target.course.value)
        // console.log(e.target.marks.value)
        dispatch(updateMarks({
            course: values.course,
            quarter: values.quarter,
            marks: values.marks
        }))
    }

    return <div>
        <Card style={{width: "auto", padding: "20px"}}>
        <Form onFinish={formSubmitHandle} initialValues={{
            course: "physics",
            quarter:"1",
            marks:0
        }}> 
            <Form.Item label="Course Name" name={"course"}>
                <Select name="course" id="course">
                    <Select.Option value="physics">Physics</Select.Option>
                    <Select.Option value="chemistry">Chemistry</Select.Option>
                    <Select.Option value="mathematics">Mathematics</Select.Option>
                    <Select.Option value="english">English</Select.Option>
                    <Select.Option value="computer">Computer Science</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Quarter" name={"quarter"}>
                <Select name="quarter" id="quarter" >
                    <Select.Option value="1">1st Quarter</Select.Option>
                    <Select.Option value="2">2nd Quarter</Select.Option>
                    <Select.Option value="3">3rd Quarter</Select.Option>
                    <Select.Option value="4">4th Quarter</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Marks"
                name="marks">
                <Input placeholder="Marks" type="number" min="0" max="100" id="marks"/>
            </Form.Item>
            <Form.Item >
                <Button style={{width:"100%"}} type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
        </Card>
    </div>
}

export default AddCourses;