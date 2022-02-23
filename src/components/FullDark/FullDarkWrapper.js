import styled from "styled-components";

const FullDarkWrapper = styled.div`
  .jobForYou {
    background: linear-gradient(
        to bottom,
        rgba(22, 28, 36, 0.88),
        rgba(22, 28, 36, 0.88)
      ),
      url(https://zone-assets-api.vercel.app/assets/images/career/career_newsletter.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .btn {
    border-top-left-radius: 0;
  }
`;

export default FullDarkWrapper;
