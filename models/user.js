const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minLength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /(https?:\/\/\-)(w{3})?([a-zA-Z]{2,63})(\/\w-)(^[a-zA-Z._~:/?%#[]@!$&'()*+#,;=]{2,63})/;
      },
    },
  },
});

module.exports = mongoose.model("user", userSchema);
