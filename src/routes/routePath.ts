export const rootPaths = {
  dashboard: "/",
  authPaths: {
    simplePaths: {
      simpleLogin: "simple_login",
      simpleRegister: "simple_register",
      simpleForgetPassword: "simple_forgetPassword",
    },
    splitPaths: {
      splitLogin: "split_login",
      splitRegister: "split_register",
      splitForgetPassword: "split_forgetPassword",
    },
    cardPaths: {
      cardLogin: "card_login",
      cardRegister: "card_register",
      cardForgetPassword: "card_forgetPassword",
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
  simpleForgetPassword: rootPaths.authPaths.simplePaths.simpleForgetPassword,
  splitForgetPassword: rootPaths.authPaths.splitPaths.splitForgetPassword,
  cardForgetPassword: rootPaths.authPaths.cardPaths.cardForgetPassword,
};
