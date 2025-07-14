const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
};

const validateUser = (data) => {
  const errors = [];

  if (!data.username || data.username.trim().length < 3) {
    errors.push("Username must be at least 3 characters long");
  }

  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
    errors.push("Valid email is required");
  }

  if (!data.password || data.password.length < 6) {
    errors.push("Password must be at least 6 characters long");
  }

  return errors;
};

const validateNote = (data) => {
  const errors = [];

  if (!data.title || data.title.trim().length === 0) {
    errors.push("Title is required");
  }

  if (!data.content || data.content.trim().length === 0) {
    errors.push("Content is required");
  }

  return errors;
};

const validateBookmark = (data) => {
  const errors = [];

  if (!data.url || !/^https?:\/\/.+/.test(data.url)) {
    errors.push("Valid URL is required");
  }

  return errors;
};

module.exports = {
  isValidUrl,
  validateUser,
  validateNote,
  validateBookmark,
};
