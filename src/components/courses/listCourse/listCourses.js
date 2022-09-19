import React, { useEffect, useState } from "react"
import courses from "./../../../redux/store"
import { useDispatch, useSelector } from 'react-redux'


import {getAllCourses, selectCourse} from "./../../../redux/reducers/course.reducer"
import { Card, Form, Select, Space, Table, Tag } from "antd"



let ListCourse = ()=>{
    let [state, setState] = useState({
        course:"physics"
    })
    let [tableData, setTableData] = useState([])
    let stateValue = useSelector(getAllCourses);
    let dispatch = useDispatch();


const columns = [
    {
      title: 'Course',
      dataIndex: 'course',
      key: 'course',
      render: text => <>{text}</>
    },
    {
      title: 'Quarter',
      dataIndex: 'quarter',
      key: 'quarter',
    },
    {
      title: 'Marks',
      dataIndex: 'marks',
      key: 'marks',
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Reset</a>
        </Space>
      ),
    },
  ];

    const data = [
        {
          key: '1',
          course: 'Physics',
          quarter: 1,
          marks: 2,
        },
        {
          key: '2',
          course: 'Physics',
          quarter: 1,
          marks: 2,
        },
      ];

      useEffect(()=>{
        console.log(tableData)
        
      }, [tableData])
      useEffect(()=>{
        console.log(stateValue)
        let courses = stateValue.courses.courses[state.course];
        let newArr = Array(courses.length)
        for(let i=0; i < newArr.length; i++){
            newArr[i] = {
                key : String(i+1),
                course: state.course,
                quarter: courses[i].quarter,
                marks: courses[i].marks,
                grade: courses[i].grade
            }
        }
        setTableData(newArr)

      },[state])
      useEffect(()=>{
        let courses = stateValue.courses.courses[state.course];
        let newArr = Array(courses.length)
        for(let i=0; i < newArr.length; i++){
            newArr[i] = {
                key : String(i+1),
                course: state.course,
                quarter: courses[i].quarter,
                marks: courses[i].marks,
                grade: courses[i].grade
            }
        }
        setTableData(newArr)
      }, [stateValue])
    return <> 
            
            <Card>
            <Form initialValues={{course:"physics"}}>
                <Form.Item label="Select Course Name" name={"course"}>
                    <Select name="course" id="course" onChange={(e)=>{
                        dispatch(selectCourse(e))
                        setState(prev=>{
                            return {...prev, course:e}
                        })
                    }}>
                        <Select.Option value="physics">Physics</Select.Option>
                        <Select.Option value="chemistry">Chemistry</Select.Option>
                        <Select.Option value="mathematics">Mathematics</Select.Option>
                        <Select.Option value="english">English</Select.Option>
                        <Select.Option value="computer">Computer Science</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
            <br />
                <Table columns={columns} dataSource={tableData} />
            </Card>
        </>
}
export default ListCourse;
