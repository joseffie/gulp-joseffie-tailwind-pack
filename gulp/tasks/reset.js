export const reset = async () => {
  const deletedDirectoryPaths = $.plugins.del([$.config.path.buildFolder]);

  return (
    deletedDirectoryPaths,
    console.log($.plugins.chalk.yellow(`Deleted directories:\n${deletedDirectoryPaths.join('\n')}`))
  );
};
