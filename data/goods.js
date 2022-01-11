// const goods = [
//   {
//     id: "g01",
//     poster: "./img/goods-example1.png",
//     title: "hongik 후드",
//     startDate: "2021.12.01",
//     endDate: "2021.12.14",
//     category: "후드티",
//   },
//   {
//     id: "g02",
//     poster: "./img/goods-example2.png",
//     title: "산업디자인과 졸업전시",
//     startDate: "2021.12.01",
//     endDate: "2021.12.14",
//     category: "뱃지",
//   },
//   {
//     id: "g03",
//     poster: "./img/goods-example3.png",
//     title: "산디과 작업복",
//     startDate: "2021.12.14",
//     endDate: "2021.12.31",
//     category: "의류",
//   },
//   {
//     id: "g04",
//     poster: "./img/goods-example4.png",
//     title: "시디과 졸업전시",
//     startDate: "2021.12.02",
//     endDate: "2021.12.14",
//     category: "뱃지",
//   },
//   {
//     id: "g05",
//     poster: "./img/goods-example5.png",
//     title: "시각디자인과 과잠",
//     startDate: "2021.11.01",
//     endDate: "2021.12.14",
//     category: "과잠",
//   },
//   {
//     id: "g06",
//     poster: "./img/goods-example6.png",
//     title: "홍익대학교 야구잠바",
//     startDate: "2021.12.05",
//     endDate: "2021.12.14",
//     category: "야구잠바",
//   },
// ];

// const goodsBanner = [
//   {
//     id: "goodsBanner01",
//     poster: "./img/goods-banner-example1.png",
//     title: "당신의 굿즈에 투표하세요!",
//     startDate: "2021.12.01",
//     endDate: "2021.12.14",
//   },
//   {
//     id: "goodsBanner02",
//     poster: "./img/goods-banner-example2.png",
//     title: "홍익대학교 마스코트 공모전",
//     startDate: "2021.12.08",
//     endDate: "2021.12.31",
//   },
// ];

//import { db } from "../db/database.js";

import { sequelize } from "../db/database.js";
import SQ from "sequelize";
const DataTypes = SQ.DataTypes;

const goods = sequelize.define(
  "good",
  {
    id: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true,
    },
    poster: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  { timestamps: false }
);

const goodsBanner = sequelize.define(
  "goodsBanners",
  {
    id: {
      type: DataTypes.CHAR(13),
      allowNull: false,
      primaryKey: true,
    },
    poster: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export async function getBanner() {
  //return db.execute("select * from goodsBanner_1").then((result) => result[0]);
  return goodsBanner.findAll();
}

export async function getGoods() {
  //return db.execute("select * from goods").then((result) => result[0]);
  return goods.findAll();
}
