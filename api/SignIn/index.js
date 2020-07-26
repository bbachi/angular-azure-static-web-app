module.exports = async function (context, req) {

  context.log('JavaScript HTTP trigger function processed a request.');
  try {
    const response = {status: true};
    context.res.status(200).json(response);
  } catch (error) {
    context.res.status(500).send(error);
  }
};