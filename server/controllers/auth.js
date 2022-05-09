module.exports.register = (req,res) => {
  res.status(200).json({
    form: req.body
  })

}
