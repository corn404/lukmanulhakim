const express = require("express");
const route = express.Router();

const {
  getAllSiswa,
  getSiswaByNis,
  registerSiswa,
  editSiswa,
} = require("../controllers/siswa");

// get semua data siswa
route.get("/", getAllSiswa);
// get siswa by NIS
route.get("/:nis", getSiswaByNis);
// mendaftarkan siswa
route.post("/", registerSiswa);
// edit data siswa
route.put("/:nis", editSiswa);

module.exports = route;
