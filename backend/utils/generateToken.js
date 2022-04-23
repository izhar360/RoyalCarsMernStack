import jwt from "jsonwebtoken";

const JWT_SECRET =
  "060665db15444e051100881b4c4b1a46916a87339b582a46144345e07e922fa1fc83e3d7570b3afdbc02a9b60f39cee285ccb3a68ff866647f1f1c8ade6c3079";
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
