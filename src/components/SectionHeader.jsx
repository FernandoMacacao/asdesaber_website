import { Typography } from "@mui/material";
import React from "react";

const SectionHeader = ({ title, subtitle, white }) => {
  return (
    <>
      <Typography
        variant="h6"
        color="textSecondary"
        textAlign="center"
        sx={{ textShadow: white ? "0px 0px 2px #3D3C3C" : undefined }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={white ? "common.white" : "textPrimary"}
        textAlign="center"
        mb={{ xs: 2, md: 6 }}
      >
        {subtitle}
      </Typography>
    </>
  );
};

export default SectionHeader;
