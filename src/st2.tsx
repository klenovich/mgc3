import { Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import Box from "@mui/material/Box";
import clsx from "clsx";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

function App() {
  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: "#eaeaf0",
      padding: 8,
      borderRadius: "50%"
    },
    active: {
      color: "red"
    },
    completed: {
      color: "green"
    }
  }));

  const CustomStepIcon = (props) => {
    const classes = useStyles();
    const { active, completed } = props;

    const stepIcons = {
      1: <NoteAddIcon />,
      2: <AddAPhotoIcon />,
      3: <AddAlertIcon />
    };

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed
        })}
      >
        {stepIcons[String(props.icon)]}
      </div>
    );
  };

  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
    "Create an ad"
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ padding: 2 }} elevation={3}>
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <div>Order #</div>
          </Grid>
          <Grid item xs={8}>
            <div>Item description and such</div>
          </Grid>
          <Grid item xs={2}>
            <div>
              $17.38 <Chip label="Paid" color="success" />
            </div>
          </Grid>
          <Grid item xs={1}>
            <div>
              <button>menu</button>
            </div>
          </Grid>
        </Grid>

        <Paper sx={{ padding: 0 }} elevation={0} variant="outlined">
          <div>{steps[1]}</div>
          <div style={{ margin: 0 }}>
            <Stepper activeStep={1}>
              <Step>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  Register your name
                </StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  Register your email
                </StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  Click on Finish
                </StepLabel>
              </Step>
            </Stepper>
          </div>
        </Paper>
      </Paper>
    </Box>
  );
}

export default App;
