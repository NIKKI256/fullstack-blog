import _ from 'lodash'

export function useCheckEmptyArgs() {

    const checkPrimitiveArgs = function () {
        return !_.every([...arguments])
    }

    return { checkPrimitiveArgs }
}
