import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack>
          <Box>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h4">Daniel Angelo O. Rodriguez</Typography>
            </Link>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
