module.exports.login = async (req, res) => {
  res.render("admin/pages/login", {
    pageTitle: "Trang đăng nhập"
  })
}

module.exports.register = async (req, res) => {
  res.render("admin/pages/register", {
    pageTitle: "Trang đăng ký tài khoản"
  })
}

module.exports.forgotPassword = async (req, res) => {
  res.render("admin/pages/forgot-password", {
    pageTitle: "Trang quên mật khẩu"
  })
}