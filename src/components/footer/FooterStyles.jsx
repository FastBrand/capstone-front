import { styled } from "@mui/system";
import { List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = styled("img")(({ theme }) => ({
  width: "150px",
  filter: "grayscale(100%)",
  paddingRight: "80px",
  opacity: 0.7,
  [theme.breakpoints.down("850")]: {
    padding: 0,
  },
}));

export const FooterContainer = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  fontFamily: "Pretendard",
  padding: "10px 18vw",
  [theme.breakpoints.down("lg")]: {
    padding: "0 5vw",
  },
}));

export const FooterWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("850")]: {
    flexDirection: "column",
    paddingBottom: "20px",
  },
}));

export const CustomList = styled(List)(({ theme }) => ({
  padding: "0 _ 3 _",
  display: "flex",
  flexDirection: "row",
}));

export const CustomListItem = styled(Link)(({ theme }) => ({
  paddingRight: theme.spacing(5),
  textDecoration: "none",
}));

export const CustomListItemText = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  fontWeight: "500",
  color: "white",
}));

export const CompanyInfo = styled("div")(({ theme }) => ({
  color: "#696969",
  fontWeight: "500",
}));
