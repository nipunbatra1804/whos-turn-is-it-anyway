import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Checkbox from "@material-ui/core/Checkbox";
import MenuIcon from "@material-ui/icons/Menu";

import IconButton from "@material-ui/core/IconButton";
import _ from "lodash";
const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  marginLeft: "2em"
};

class SideDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      drawerOpen: false
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    const { students, handleToggle } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          {students.map((student, index) => (
            <ListItem
              button
              key={student.studentId}
              onClick={() => handleToggle(index)}
            >
              <Checkbox checked={student.present} disableRipple />
              <ListItemText primary={student.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {["nipun", "payal", "ankit", "tejas"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div style={{ marginLeft: "20px" }}>
        <IconButton onClick={this.toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            //onClick={this.toggleDrawer("left", false)}
            //onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideDrawer);
