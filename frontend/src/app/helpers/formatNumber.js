export const formatNumber = number => {
  return (
    (number / 1000)
      .toFixed(0)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + 'k €'
  );
};
