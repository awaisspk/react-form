export default function ValidateInfo(values) {
  let errors = {};
  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'password required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters long';
  }
  if (!values.password2) {
    errors.password = 'password required';
  } else if (values.password !== values.password2) {
    errors.password = 'password does not match';
  }
  return errors;
}
