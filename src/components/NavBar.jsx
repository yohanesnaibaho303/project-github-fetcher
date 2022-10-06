import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const NavBar = () => {
    return (
        <>
        <Box
            sx={{
                displat: "flex",
                gap: "0.5",
                border: "1px dashed grey",
                p: 2,
                justifyContent: "space-between",
            }}
        >
            <Box>
                <Typography variant="h5">Github Apps</Typography>
            </Box>
            <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5em",
            }}
            >
                <Link to="/list">
                    <Typography variant="body2">List</Typography>
                </Link>
                <Link to="/add">
                    <Typography variant="body2">Add</Typography>
                </Link>
            </Box>
        </Box>
        </>
    );
};

export default NavBar