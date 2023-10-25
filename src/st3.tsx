import * as React from "react";
import { styled, makeStyles, useTheme } from "@mui/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FactoryIcon from "@mui/icons-material/Factory";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import BusinessIcon from "@mui/icons-material/Business";
import MapIcon from "@mui/icons-material/Map";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Button, Menu, MenuItem, Grid, Typography } from "@mui/material";

// Define Styles
const useStyles = makeStyles((theme) => ({
  icon: {
    minWidth: 14, // Reduce this to make the icon smaller
    color: "#808080" // Light grey color
  },
  text: {
    fontSize: "0.875rem", // Adjust this for the text size
    color: "#808080" // Light grey color
  },
  bullet: {
    margin: "0 8px", // Adjust for space between bullet and text
    color: "#808080" // Light grey color
  },
  stepIcons: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    padding: 0
  },
  stepIcon: {
    maxWidth: "22px"
  }
}));

// Step Connector Styling
const Connector = styled(StepConnector)(({ theme }) => ({
  // Styles
}));

// Step Icon Styling
const CustomStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  // Styles
}));

// Step Icon Component
function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
  const icons: Record<string, React.ReactElement> = {
    1: <ReceiptLongIcon />,
    2: <FactoryIcon />,
    3: <LocalShippingIcon />,
    4: <AssignmentTurnedInIcon />
  };

  return (
    <CustomStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </CustomStepIconRoot>
  );
}

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
  "Create an ad"
];

// Stepper Component
// Stepper Component
export default function CustomSteppers() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();
  const businessName = "Business Name";
  const businessAddress = "123 Business St, Business City, BS 12345";
  const status = "Status";
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ padding: 2 }} elevation={3}>
        <Grid container spacing={2}>
          {/* First Row */}
          <Grid container justifyContent="space-between" alignItems="center">
            {/* Add your Components here */}
          </Grid>

          {/* Second Row */}
          <Grid item xs={12}>
            <Paper
              sx={{ padding: 2, marginTop: 2, marginBottom: 2 }}
              elevation={0}
            >
              {/* Add your Components here */}
            </Paper>
          </Grid>

          {/* Status Area */}
          <Typography variant="body1" gutterBottom>
            <Box fontWeight="fontWeightBold" display="inline" pr={1}>
              {steps[1]}
            </Box>
            <Box display="inline">{/*date goes here*/}</Box>
          </Typography>

          {/* Stepper */}
          <Grid item xs={12}>
            <Stepper
              className={classes.stepIcons}
              alternativeLabel
              activeStep={4}
              connector={<Connector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={CustomStepIcon}>
                    {/*label*/}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
