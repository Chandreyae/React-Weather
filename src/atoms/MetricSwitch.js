import { Switch, withStyles } from "@material-ui/core";

const MetricSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.primary,
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.black,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.info[400],
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "theme.palette.common.black",
  },
  checked: {},
}))(Switch);

export default MetricSwitch;
