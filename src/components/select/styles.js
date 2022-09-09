export const selectStyles = dark => ({
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'transparent',
    borderColor: '#E7ECF2',
    boxShadow: state.isFocused ? '0px 0px 10px rgba(33, 58, 88, 0.1);' : 'none',
    padding: '5px 11px 6px 11px',
    '&:hover': {
      borderColor: '#C4C6CA'
    },
    '@media only screen and (max-width: 1170px)': {
      padding: '3px 5px 4px 5px',
    },
  }),
  placeholder: styles => ({
    ...styles,
    color: '#9099A6',
    fontSize: '14px'
  }),
  singleValue: styles => ({
    ...styles,
    color: dark ? '#ffffff' : '#3c4146',
    fontWeight: '500',
    fontSize: '14px'
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: isSelected ? '#ffffff' : (dark ? '#ffffff' : '#3C4146'),
    fontWeight: '500',
    fontSize: '14px',
    padding: '13px 20px',
    backgroundColor: isDisabled ? null : (isSelected ? '#5E00D6' : (isFocused ? (dark ? '#9099a6' : '#f3f4f7') : null)),
    cursor: 'pointer',
    '@media only screen and (max-width: 1170px)': {
      padding: '12px 15px',
    },
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: dark ? '#3a3939' : '#ffffff',
    zIndex: 9999
  })
});
