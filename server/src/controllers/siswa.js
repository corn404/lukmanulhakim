const consola = require("consola");
// import model
const Siswa = require("../models/siswa");

module.exports = {
  // GET ALL SISWA
  getAllSiswa: async (req, res, next) => {
    try {
      const siswa = await Siswa.find({ status: 1 });
      if (siswa) {
        return res.status(200).json({
          status: 200,
          success: true,
          message: "Success",
          data: siswa,
        });
      }
      return res.status(200).json({
        status: 200,
        success: false,
        message: "Error",
      });
    } catch (error) {
      consola.error("ERROR", error);
    }
  },

  // GET SISWA BY NIS
  getSiswaByNis: async (req, res, next) => {
    const { nis } = req.params;
    try {
      const siswa = await Siswa.findOne({ nis });
      if (siswa) {
        return res.status(200).json({
          status: 200,
          success: true,
          message: "Success",
          data: siswa,
        });
      }
      return res.status(200).json({
        status: 200,
        success: false,
        message: "Error",
      });
    } catch (error) {
      consola.error("ERROR", error);
    }
  },

  // REGISTER SISWA
  registerSiswa: async (req, res, next) => {
    const {
      nis,
      nama_depan,
      nama_belakang,
      nama_panggilan,
      tempat_lahir,
      tgl_lahir,
      kelamin,
      agama,
      alamat,
      foto,
      status_masuk,
    } = req.body;
    try {
      const checkSiswa = await Siswa.findOne({ nis });
      if (checkSiswa) {
        return res.status(200).json({
          status: 200,
          success: false,
          message: "NIS Sudah terdaftar",
        });
      }

      const addSiswa = new Siswa({
        nis,
        nama_depan,
        nama_belakang,
        nama_panggilan,
        tempat_lahir,
        tgl_lahir,
        kelamin,
        agama,
        alamat,
        foto,
        status_masuk,
      });

      await addSiswa
        .save()
        .then((data) => {
          return res.status(201).json({
            status: 201,
            success: true,
            message: "Success",
            data: data,
          });
        })
        .catch((err) => {
          return res.status(201).json({
            status: 201,
            success: false,
            message: "Error",
            error: err,
          });
        });
    } catch (error) {
      consola.error("ERROR", error);
    }
  },

  // EDIT DATA SISWA BY NIS
  editSiswa: async (req, res, next) => {
    const { nis } = req.params;
    const {
      nama_depan,
      nama_belakang,
      nama_panggilan,
      tempat_lahir,
      tgl_lahir,
      kelamin,
      agama,
      alamat,
      foto,
      status_masuk,
    } = req.body;
    try {
      const siswa = await Siswa.updateOne(
        { nis: nis },
        {
          $set: {
            nama_depan,
            nama_belakang,
            nama_panggilan,
            tempat_lahir,
            tgl_lahir,
            kelamin,
            agama,
            alamat,
            foto,
            status_masuk,
          },
        }
      );
      if (!siswa) {
        return res.status(201).json({
          status: 201,
          success: false,
          message: "Error",
        });
      }
      return res.status(201).json({
        status: 201,
        success: true,
        message: "Success",
      });
    } catch (error) {
      consola.error("ERROR", error);
    }
  },
};
