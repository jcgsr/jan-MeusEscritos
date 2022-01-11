// exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     //   actions.setWebpackConfig({
//     //     module: {
//     //       rules: [
//     //         {
//     //           test: /reach-router/,
//     //           use: loaders.null(),
//     //         },
//     //       ],
//     //     },
//     //   });
//     externals: getConfig().externals.concat(function (
//       context,
//       request,
//       callback
//     ) {
//       const regex = /^@?firebase(\/(.+))?/;
//       // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
//       if (regex.test(request)) {
//         return callback(null, "commonjs " + request); // <- use commonjs!
//       }
//       callback();
//     });
//   }
// };
