const mailchimp = require('@mailchimp/mailchimp_transactional')('YOUR_API_KEY');

module.exports = (req, res) => {
async function callPing() {
  const response = await mailchimp.users.ping();
  console.log(response);
}

callPing();

res.status(200).json({
    okey: true,
});
}