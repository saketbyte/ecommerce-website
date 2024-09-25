import { Grid, styled } from "@mui/material";

import { imageURL } from "../../constants/constants";

const Wrapper = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`;

// theme argument is used to set break point in styled components
// breakpoints.down suggests that below medium/md screen we will inject a specific css
const CovidImage = styled("img")(({ theme }) => ({
  marginTop: 10,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
}));

const MidSection = () => {
  const covidURL = "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  return (
    <>
      <Wrapper container lg={12} sm={12} md={12} xs={12}>
        {imageURL.map((image) => (
          <Grid item={true} lg={4} sm={4} md={12} xs={12}>
            <img src={image} alt="Banner" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Wrapper>

      <CovidImage src={covidURL} alt="covid banner" />
    </>
  );
};

export default MidSection;
