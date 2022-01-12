<<<<<<< HEAD
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /jodit/,
						use: loaders.null(),
					},
				],
			},
		});
	}
};
=======
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
>>>>>>> 6770c565f710dd5d76827ca5d5d48c994e646ebe
