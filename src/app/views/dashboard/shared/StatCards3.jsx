import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from "@mui/material";
import { Small } from "app/components/Typography";
import React, { useRef } from "react";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": { opacity: 0.6, fontSize: "44px", color: theme.palette.primary.main },
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  marginTop: "4px",
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.primary.main,
}));

let sample = 13;
const StatCards = () => {
  const cardList = [
    {
      name: "Annonymized for  the Data Table",
      amount: sample + " Files done",
      icon: "backuptable",
      showUpload: true,
    },

    {
      name: "Annonymized for  the Text",
      amount: sample + "Files Done",
      icon: "compare",
      showUpload: true,
    },

    {
      name: "Annonymized for Videos ",
      amount: "will be  soon integrated",
      icon: "movie",
      showUpload: false,
    },
    {
      name: "Request For Others Types of Data",
      amount: "will be  soon integrated",
      icon: "shopping_cart",
      showUpload: false,
    },
  ];

  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  // arrow_circle_up
  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    // Perform upload logic here using the selected file
    console.log("Uploaded file:", file);
  };

  return (
    <Grid container spacing={3} sx={{ mb: "24px" }}>
      {cardList.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon">{item.icon}</Icon>
              <Box ml="12px">
                <Small>{item.name}</Small>
                <Heading>{item.amount}</Heading>
              </Box>
            </ContentBox>

            {item.showUpload && (
              <Tooltip title="Upload Files" placement="top">
                <IconButton onClick={handleFileUpload}>
                  <Icon>file_upload</Icon>
                </IconButton>
              </Tooltip>
            )}

            {item.showUpload && (
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileSelected}
              />
            )}
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;
