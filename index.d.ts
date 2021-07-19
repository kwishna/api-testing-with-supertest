// declare global {
//     declare var _name: string;
// }
//
// declare global {
//     namespace NodeJS {
//         interface Global {
//             _hmmm: string;
//         }
//     }
// }

declare namespace jasmine {

    interface Matchers<T> {
        toBePlaying(expected: Expected<T>): void
    }

/*
    interface ArrayLikeMatchers<T> extends Matchers<ArrayLike<T>> {
        toBe(expected: Expected<ArrayLike<T>> | ArrayContaining<T>): void;
    }

    interface FunctionMatchers<Fn extends Func> extends Matchers<any> {
        toHaveBeenCalledWith(...params: MatchableArgs<Fn>): void;
    }

    interface AsyncMatchers<T, U> {
        toBePending(expectationFailOutput: any): PromiseLike<void>;
    }
*/
}
