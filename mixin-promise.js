

export const promiseMixin = function (methodOptions) {
    methodOptions.promise = function promise(args) {
        return new Promise((resolve, reject) => {
            Meteor.call(methodOptions.name, args, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    return methodOptions;
}

export default promiseMixin