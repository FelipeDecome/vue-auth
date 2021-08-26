function getValidationErrors(err) {
  const validationErrors = {};

  err.inner.forEach((error) => {
    if (!error.path) return;

    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

export { getValidationErrors };
