const isPhone = (value) => {
  /^ 07\d{ 8 } $ /.test(value);
}

const isEmail = (value) => /\S+@\S+\.\S+/.test(value) || false;

const isUsername = (value) =>
  /^[A-Za-z0-9_]{1,20}$/.test(value) || false;

export {
  isPhone,
  isUsername,
  isEmail
};
