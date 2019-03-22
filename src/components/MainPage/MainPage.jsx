import React, { Component } from "react";
import SideDrawer from "../SideDrawer/SideDrawer";
import "./MainPage.scss";
import { getStudents } from "../../services/studentService";
import MainPageJumboTron from "./MainPageJumboTron";
import { Row } from "reactstrap";
import { Random } from "random-js";

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: null
    };
    this.random = new Random();
  }
  componentDidMount = () => {
    const students = { ...this.state.students };
    this.setState({ students: getStudents() });
  };

  handleToggle = index => {
    const studentsCopy = this.state.students;
    studentsCopy[index].present = !studentsCopy[index].present;
    console.log(index);

    this.setState({ students: studentsCopy });
  };

  handleClick = () => {
    const students = this.state.students;

    const filteredPresentStudents = students.filter(
      student => student.present === true
    );
    if (filteredPresentStudents.length === 0) {
      return;
    }
    const filteredStudents = filteredPresentStudents.filter(
      student => student.selected === false
    );
    if (filteredStudents.length !== 0) {
      const randIndex = this.random.integer(0, filteredStudents.length - 1);
      console.log(randIndex);
      filteredStudents[randIndex].selected = true;
      this.setState({
        students: students,
        selectedStudent: filteredStudents[randIndex]
      });
    } else {
      students.forEach(student => (student.selected = false));
      this.setState({ students });
    }
  };

  render() {
    const { students, selectedStudent } = this.state;
    return (
      <div
        className="main-page"
        onKeyPress={() => {
          this.handleClick();
        }}
      >
        <Row>
          <SideDrawer students={students} handleToggle={this.handleToggle} />
        </Row>
        <Row>
          <MainPageJumboTron
            student={selectedStudent}
            handleClick={this.handleClick}
          />
        </Row>
      </div>
    );
  }
}

export default MainPage;
