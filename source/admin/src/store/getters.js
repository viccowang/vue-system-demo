const getters = {
  //
  userName: state => state.user.name,
  avatar: state => state.user.avatar,
  token: state => state.user.token,
  roles: state => state.user.roles,
  asyncRouter: state => state.asyncRouter.router
}

export default getters
