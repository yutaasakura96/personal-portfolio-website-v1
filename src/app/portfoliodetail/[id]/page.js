'use client';

import React from 'react';
import { useTranslations } from 'next-intl'; // Import translations hook
import PortfolioDetailDesign from '../../page/portfolio-detail-design';

const Portfolio = (props) => {
  const tGlobal = useTranslations(); // Access root-level translations
  const dataArray = tGlobal.raw('DataArray'); // Access DataArray from translations

  const { id } = props.params;
  const validId = parseInt(id);

  // Ensure the id is valid to avoid potential errors
  if (isNaN(validId) || validId < 0 || validId >= dataArray.length) {
    return <p>Error: Invalid project ID</p>;
  }

  return (
    <React.Fragment>
      <PortfolioDetailDesign
        data={dataArray[validId]} // Pass the project data based on id
        id={validId}
        DataArray={dataArray} // Pass the entire array if needed
      />
    </React.Fragment>
  );
};

export default Portfolio;
