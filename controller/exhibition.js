import * as exhibitionRepos from "../data/exhibition.js";

export async function getExhibitions(req, res, next) {
  const data = await exhibitionRepos.getAll();
  res.status(200).json(data);
}

export async function getExhibition(req, res, next) {
  const id = req.params.id;
  const data = await exhibitionRepos.getById(id);
  res.status(200).json(data);
}
