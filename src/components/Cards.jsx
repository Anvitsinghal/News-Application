// import React from 'react'
// import styled from 'styled-components';

// function Cards({ data }) {
//     return (


//         <FoodCardContainer>
       
//           <FoodCards>
//           {data?.articles?.map((article, index) => (
//           <FoodCard key={index}>
//             <div className="image-container"> { <img  style={{height:'167px' , width:'50px'}}src={article.urlToImage} alt="" /> }</div>
           
//             <h3 style={{color:'white'}}>{article.title}</h3>
//             <p style={{color:'white'}}>{article.description}</p>

//           </FoodCard>
//         )) || <div>No articles available</div>} 
//           </FoodCards>
       
//       </FoodCardContainer>

          







      
//     );
//   }
  
// export default Cards

// const FoodCardContainer = styled.section`
//   min-height: calc(100vh - 210px);
//   background-image: url("/bg.png");
//   background-size: cover;
// `;
// const FoodCards = styled.div`
  
//   row-gap: 32px;
//   column-gap: 20px;
//   justify-content: center;
//   align-items: center;
//   padding-top: 80px;
// `;
// const FoodCard = styled.div`
//   width: 100%;
//   height: 167px;
//   border: 0.66px solid;

//   border-image-source: radial-gradient(
//       80.69% 208.78% at 108.28% 112.58%,
//       #eabfff 0%,
//       rgba(135, 38, 183, 0) 100%
//     ),
//     radial-gradient(
//       80.38% 222.5% at -13.75% -12.36%,
//       #98f9ff 0%,
//       rgba(255, 255, 255, 0) 100%
//     );

//   background: url(.png),
//     radial-gradient(
//       90.16% 143.01% at 15.32% 21.04%,
//       rgba(165, 239, 255, 0.2) 0%,
//       rgba(110, 191, 244, 0.0447917) 77.08%,
//       rgba(70, 144, 213, 0) 100%
//     );
//   background-blend-mode: overlay, normal;
//   backdrop-filter: blur(13.1842px);

//   border-radius: 20px;

  
//   padding: 8px;

//   .food_info {
    
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: end;
//     h3 {
//       margin-top: 8px;
//       font-size: 16px;
//       font-weight: 500;
//     }
//     p {
//       margin-top: 4px;
//       font-size: 12px;
//     }
//     button {
//       font-size: 12px;
//     }
//   }

//   .image-container {
//     flex-shrink: 0; /* Prevent image from shrinking */
//     width: 80px;
//     height: 80px;
//     border-radius: 10px; /* Optional: Rounded corners for the image */
//     overflow: hidden; /* Ensure the image fits within the container */
//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover; /* Ensure the image is properly scaled */
//     }
//   }


// `;


import React from 'react';
import styled from 'styled-components';

function Cards({ data }) {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.articles?.map((article, index) => (
          <FoodCard key={index}>
            <div className="image-container">
              <img src={article.urlToImage} alt={article.title} />
            </div>
            <div className="text-container">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </FoodCard>
        )) || <div>No articles available</div>}
      </FoodCards>
    </FoodCardContainer>
  );
}

export default Cards;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Space between cards */
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  display: flex; /* Use flexbox to align image and text side-by-side */
  align-items: center;
  width: 100%;
  max-width: 400px; /* Optional: Set max width for cards */
  height: 167px;
  padding: 10px;
  border: 0.66px solid;
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
  background: radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    ),
    transparent;
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  gap: 10px;

  .image-container {
    flex-shrink: 0; /* Prevent image from shrinking */
    width: 80px;
    height: 80px;
    border-radius: 10px; /* Optional: Rounded corners for the image */
    overflow: hidden; /* Ensure the image fits within the container */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Ensure the image is properly scaled */
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      color: white;
    }

    p {
      margin: 0;
      font-size: 12px;
      color: white;
    }
  }
`;
