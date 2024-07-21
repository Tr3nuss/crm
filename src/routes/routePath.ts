export const rootPaths = {
  dashboard: "/",
  authPaths: {
    simplePaths: {
      simpleLogin: "simple_login",
      simpleRegister: "simple_register",
    },
    splitPaths: {
      splitLogin: "split_login",
      splitRegister: "split_register",
    },
    cardPaths: {
      cardLogin: "card_login",
      cardRegister: "card_register",
    },
  },
};

export default {
  simpleLogin: rootPaths.authPaths.simplePaths.simpleLogin,
  splitLogin: rootPaths.authPaths.splitPaths.splitLogin,
  cardLogin: rootPaths.authPaths.cardPaths.cardLogin,
  simpleRegister: rootPaths.authPaths.simplePaths.simpleRegister,
  splitRegister: rootPaths.authPaths.simplePaths.simpleRegister,
  cardRegister: rootPaths.authPaths.cardPaths.cardRegister,
};
