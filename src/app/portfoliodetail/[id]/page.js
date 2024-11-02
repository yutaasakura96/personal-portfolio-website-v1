"use client";

// Purpose: This file is used to render the portfolio detail page based on the project ID

// React and Next.js Imports
import React from "react";
import { useTranslations } from "next-intl"; // Translations hook

// Component Imports
import PortfolioDetailDesign from "../../page/portfolio-detail-design";

const Portfolio = (props) => {
  const tGlobal = useTranslations(); // Access root-level translations
  const dataArray = tGlobal.raw("DataArray"); // Access DataArray from translations

  const { id } = props.params;
  const validId = parseInt(id, 10);

  // Ensure the id is valid to avoid potential errors
  if (isNaN(validId) || validId < 0 || validId >= dataArray.length) {
    return (
      <section aria-labelledby="error-message">
        <h2 id="error-message" role="alert">
          Error: Invalid project ID
        </h2>
        <p>
          The project you are trying to view does not exist. Please check the ID
          or return to the portfolio overview.
        </p>
      </section>
    );
  }

  return (
    <React.Fragment>
      <PortfolioDetailDesign
        data={dataArray[validId]} // Pass the project data based on ID
        id={validId}
        DataArray={dataArray} // Pass the entire array if needed
      />
    </React.Fragment>
  );
};

export default Portfolio;
