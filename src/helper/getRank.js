export default rank => {
  switch (true) {
    case rank === 1:
      return 'Satanas 😈';
    case rank < 4:
      return 'Demonyo 👿';
    case rank < 6:
      return 'Halimaw 👺';
    case rank < 11:
      return 'Kampon 🤡';
    default:
      return 'Angel 😇';
  }
};
