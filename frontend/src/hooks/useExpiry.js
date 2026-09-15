const useExpiry = (expiresAt) => {
  const expiresIn = Math.max(
    0,
    Math.ceil(
      (new Date(expiresAt).getTime() - Date.now()) / (1000 * 60 * 60),
    ),
  );

  return expiresIn;
};

export default useExpiry;