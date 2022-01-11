import * as goodsRepos from "../data/goods.js";

export async function getgoods(req, res, next) {
  const goods = await goodsRepos.getGoods();
  const goodsBanner = await goodsRepos.getBanner();
  res.status(200).json({ goods: goods, goodsBanner });
  //res.status(200).json(goods);
}
