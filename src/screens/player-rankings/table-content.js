/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

export const tableContent = () => {
  return [
    {
      styles: {
        width: '70px',
        textAlign: 'center'
      },
      title: 'ID',
      render: (_, idx) => <Fragment>{idx + 1}</Fragment>
    },
    {
      title: 'Player Name',
      render: ({ playerName }) => <Fragment>{playerName}</Fragment>
    },
    {
      styles: {
        textAlign: 'center'
      },
      title: 'PR Points',
      render: ({ prPoints }) => <Fragment>{prPoints}</Fragment>
    },
    {
      styles: {
        textAlign: 'right'
      },
      title: 'Earnings',
      render: ({ earnings }) => <Fragment>${earnings}</Fragment>
    },
  ];
};
