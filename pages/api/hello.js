// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ 'var': process.env.OAUTH_CLIENT_ID })
}
