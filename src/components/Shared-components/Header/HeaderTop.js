"use client";

import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  List,
  ListItem,
} from "@mui/material";

import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { work_Sans } from "@/fonts";

const HeaderTop = () => {
  const theme = useTheme();
  const [currency, setCurrency] = useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Box
      className="p-2.5"
      sx={{
        fontFamily: '"Work Sans", sans-serif',
        background: theme.palette.primary.main,
        "& .css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input":
          {
            paddingTop: "0",
            paddingBottom: "0",
          },
      }}
    >
      <Box className="container mx-auto">
        <Box className="flex flex-col sm:flex-row gap-2 justify-between items-center">
          <Typography
            variant="body1"
            sx={{ fontSize: "14px" }}
            className={work_Sans.className}
          >
            Get 30% Discount on Selected Items
          </Typography>
          <List
            className="flex gap-8 list-none p-0"
            sx={{
              fontSize: "14px",
              "& .css-1xom4g7-MuiInputBase-root-MuiInput-root-MuiSelect-root::before":
                { content: "none" },
            }}
          >
            <ListItem
              className="p-0"
              sx={{
                position: "relative",
                transition: "0.3s ease-in-out",
                "&:hover": {
                  color: theme.palette.third.main,
                },
                "&:before": {
                  position: "absolute",
                  content: '""',
                  width: "1px",
                  height: "100%",
                  background: "#ccc",
                  left: "calc(100% + 1rem)",
                },
              }}
            >
              <Link href="#" className={work_Sans.className}>
                Wishlist
              </Link>
            </ListItem>
            <ListItem className="p-0">
              <FormControl
                fullWidth
                variant="standard"
                className={work_Sans.className}
              >
                <Select
                  labelId="currency"
                  id="currency"
                  defaultValue={"EGP"}
                  label=""
                  onChange={handleChange}
                  sx={{ fontSize: "14px" }}
                >
                  <MenuItem value={"EGP"}>EGP</MenuItem>
                  <MenuItem value={"USD"}>USD</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderTop;
