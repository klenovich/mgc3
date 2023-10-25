import * as React from "react";
import {
  styled,
  Box,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Chip
} from "@mui/material";
import { Divider, useTheme, makeStyles } from "@material-ui/core";
import {
  Button,
  Menu,
  MenuItem,
  Grid,
  Typography,
  ListItemIcon
} from "@material-ui/core";
import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector";
import FactoryIcon from "@mui/icons-material/Factory";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import MenuIcon from "@mui/icons-material/Menu";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { StepIconProps } from "@mui/material/StepIcon";
import BusinessIcon from "@mui/icons-material/Business";
import MapIcon from "@mui/icons-material/Map";
import ReceiptIcon from "@mui/icons-material/Receipt";

type MerchItemProps = {
  item: MerchItem;
};

const steps = ["Ordered", "In Production", "Shipped", "Delivered"];

export default function Order() {
  const useStyles = makeStyles((theme) => ({
    icon: {
      minWidth: 14,
      color: "#808080"
    },
    text: {
      fontSize: "0.875rem",
      color: "#808080"
    },
    bullet: {
      margin: "0 8px",
      color: "#808080"
    }
  }));

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 14
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
      }
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
      }
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1
    }
  }));

  const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 30,
    height: 30,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
    })
  }));

  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
      1: <ReceiptLongIcon />,
      2: <FactoryIcon />,
      3: <LocalShippingIcon />,
      4: <AssignmentTurnedInIcon />
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const businessName = "Business Name";
  const businessAddress = "123 Business St, Business City, BS 12345";
  const status = "Status";

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ padding: 2 }} elevation={3}>
        <div>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={9} container alignItems="center">
              <Grid item xs={2} container alignItems="center">
                <Typography variant="subtitle1">Order #</Typography>
              </Grid>
              <Grid item>
                <Divider
                  orientation="vertical"
                  style={{
                    height: "30px",
                    marginLeft: "20px",
                    marginRight: "20px"
                  }}
                />
              </Grid>
              <Grid item xs={6} container alignItems="center">
                <Typography variant="subtitle2" style={{ color: "#737373" }}>
                  Item description and such
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={3}
              container
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item xs={8} container alignItems="center">
                <Typography variant="subtitle2" style={{ color: "#737373" }}>
                  $17.38 <Chip label="Paid" color="success" size="small" />
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                container
                alignItems="center"
                justifyContent="flex-end"
              >
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuIcon />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Grid>

          <Box display="flex" style={{ gap: "8px" }} alignItems="center">
            <ListItemIcon className={classes.icon}>
              <BusinessIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body1" className={classes.text}>
              {businessName}
            </Typography>
            <Typography variant="body1" className={classes.bullet}>
              •
            </Typography>
            <ListItemIcon className={classes.icon}>
              <MapIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body1" className={classes.text}>
              {businessAddress}
            </Typography>
            <Typography variant="body1" className={classes.bullet}>
              •
            </Typography>
            <ListItemIcon className={classes.icon}>
              <ReceiptIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body1" className={classes.text}>
              {status}
            </Typography>
          </Box>
        </div>

        <Paper
          sx={{ padding: 0, marginTop: 1 }}
          elevation={0}
          variant="outlined"
        >
          <Stack sx={{ width: "100%" }} spacing={0}>
            <Box sx={{ display: "flex", alignItems: "center", margin: 1 }}>
              <Typography variant="subtitle1" component="div">
                <Box fontWeight="fontWeightBold" color="text.primary">
                  {steps[1]}
                </Box>
              </Typography>
              <Box mx={1} />
              <Typography variant="subtitle1" component="div">
                <Box fontWeight="fontWeightRegular" color="text.secondary">
                  This is your regular, lighter text
                </Box>
              </Typography>
            </Box>
            <Grid container spacing={0}>
              <Stepper
                alternativeLabel
                activeStep={4}
                connector={<ColorlibConnector />}
                sx={{ paddingLeft: 0, width: "120%" }}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      {/*label*/}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
          </Stack>
        </Paper>
      </Paper>
    </Box>
  );
}
