const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    ideas: [
      {
        type: ObjectId,
        ref: "Idea",
      },
    ],

    bought: [{
      type: String,
    }],

    sold: [{
      type: String,
    }],
  },
  { minimize: false }
);

// userSchema.pre("save", async function () {
//   const hash = await bcrypt.hash(this.password, 10);

//   this.password = hash;
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
