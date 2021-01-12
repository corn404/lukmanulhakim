const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siswaSchema = new Schema(
  {
    nis: {
      type: String,
      required: true,
    },
    nama_depan: {
      type: String,
      required: true,
    },
    nama_belakang: {
      type: String,
      required: true,
    },
    nama_panggilan: {
      type: String,
      required: true,
    },
    tempat_lahir: {
      type: String,
      required: false,
    },
    tgl_lahir: {
      type: String,
      required: false,
    },
    kelamin: {
      type: Number,
      required: true,
    },
    agama: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
      required: false,
      default:""
    },
    status_masuk: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      default: 0,
    },
    rfid: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("siswa", siswaSchema);
