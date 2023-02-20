import Request from '../models/request';

export default async (req, res, next) => {
  console.log(res.response);
  const request = await Request.create({
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    status: res.statusCode,
  });

  return next();
};
