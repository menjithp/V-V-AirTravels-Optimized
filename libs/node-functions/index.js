import { Formidable } from "formidable";
import { getToken } from "next-auth/jwt";
const sharp = require("sharp");
const fs = require("fs");


export async function imagecompress(formfile) {
  if (formfile.size < 200000)
    return await sharp(formfile.filepath).toFormat("webp").toBuffer();
  else
    return await sharp(formfile.filepath)
      .toFormat("webp")
      .webp({ quality: 1 })
      .toBuffer();
}

export async function auth(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  return token;
}

export function movefile(oldPath, newPath) {
  try {
    fs.copyFile(oldPath, newPath, function (err) {
      if (err) throw new Error("File Copy Failed");
    });
    return "success";
  } catch (e) {
    return e;
  }
}

export function removefile_if_exists(path) {
  if (fs.existsSync(path)) {
    try {
      fs.unlink(path, (err) => {
        if (err) throw new Error("File removal failed");
      });
      return "success";
    } catch (e) {
      return e;
    }
  }
  return "success";
}

export function createdir_if_not(working_dir) {
  try {
    if (!fs.existsSync(working_dir)) {
      fs.mkdirSync(working_dir, { recursive: true }, (err) => {
        if (err) throw new Error("folder creation failed");
      });
    }
    return "success";
  } catch (e) {
    return e;
  }
}

export async function formread(request) {
  const data = await new Promise((resolve, reject) => {
    const form = new Formidable();

    form.parse(request, (err, fields, files) => {
      if (err) reject({ err });
      resolve({ err, fields, files });
    });
  });
  return data;
}

export function toBase64(filePath) {
  try {
    const buffer = fs.readFileSync(filePath, (err) => {
      throw new Error(err);
    });
    return buffer.toString("base64");
  } catch (e) {
    return e;
  }
}

export function toBuffer(filePath) {
  try {
    const buffer = fs.readFileSync(filePath, (err) => {
      throw new Error(err);
    });

    return buffer;
  } catch (e) {
    return e;
  }
}
