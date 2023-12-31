import {
  Box,
  Button,
  Card,
  Drawer,
  Icon,
  IconButton,
  Link,
  styled,
  ThemeProvider,
  Tooltip,
  useTheme,
} from "@mui/material";
import useSettings from "app/hooks/useSettings";
import { Fragment, useState } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { themeShadows } from "../MatxTheme/themeColors";
import { H5, Span } from "../Typography";
import BadgeSelected from "./BadgeSelected";

const Label = styled(Span)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1rem",
  cursor: "pointer",
  borderRadius: "4px",
  marginBottom: "2.5rem",
  letterSpacing: "1.5px",
  padding: ".25rem .5rem",
  transform: "rotate(90deg)",
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.dark,
  "&:hover, &.open": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

const MaxCustomaizer = styled("div")(({ theme }) => ({
  top: 0,
  right: 0,
  zIndex: 50,
  width: 320,
  display: "flex",
  height: "100vh",
  position: "fixed",
  paddingBottom: "32px",
  flexDirection: "column",
  boxShadow: themeShadows[12],
  background: theme.palette.background.default,
  "& .helpText": { margin: "0px .5rem 1rem" },
}));

const LayoutBox = styled(BadgeSelected)(() => ({
  width: "100%",
  height: "152px !important",
  cursor: "pointer",
  marginTop: "12px",
  marginBottom: "12px",
  "& .layout-name": { display: "none" },
  "&:hover .layout-name": {
    zIndex: 12,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    background: "rgba(0,0,0,0.3)",
  },
}));

const Controller = styled("div")(() => ({
  minHeight: 58,
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
  padding: "14px 20px",
  boxShadow: themeShadows[6],
  justifyContent: "space-between",
}));

const MatxCustomizer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const { settings, updateSettings } = useSettings();
  const secondary = theme.palette.text.secondary;

  const tooglePanel = () => setOpen(!open);

  let activeTheme = { ...settings.themes[settings.activeTheme] };

  return (
    <Fragment>
      {/* <ThemeProvider theme={activeTheme}>
        <Drawer
          open={open}
          anchor="right"
          variant="temporary"
          onClose={tooglePanel}
          ModalProps={{ keepMounted: true }}
        ></Drawer>
      </ThemeProvider> */}
    </Fragment>
  );
};

export default MatxCustomizer;
